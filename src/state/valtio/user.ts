import { proxy } from 'valtio'
import { subscribeKey } from 'valtio/utils'
import jwtDecode from 'jwt-decode'
import dayjs from 'dayjs'
import { api } from '../api'

const LOCALSTORAGE_KEY = 'shield_tokens'

export const vUser = proxy({
	tokens: {
		access: null as null | string,
		refresh: null as null | string
	},

	async getAccessToken() {
		return getAccessToken()
	},
	clear() {
		vUser.tokens = {
			access: null,
			refresh: null
		}
	}
})

let getAccessTokenPromise: Promise<string> | null = null
function getAccessToken() {
	if (!getAccessTokenPromise)
		getAccessTokenPromise = getAccessTokenReal()
			.catch(e => {
				vUser.clear()
				throw e
			})
			.finally(() => {
				getAccessTokenPromise = null
			})
	return getAccessTokenPromise
}
async function getAccessTokenReal() {
	if (!vUser.tokens.refresh) throw new Error('User not logged in')
	let doRefresh = false
	if (!vUser.tokens.access) doRefresh = true
	else {
		const tokenData: any = jwtDecode(vUser.tokens.access)
		doRefresh = dayjs()
			.add(30, 'seconds')
			.isAfter(tokenData.exp * 1000)
	}
	if (doRefresh) {
		try {
			const accessToken = await api
				.post('/auth/refresh', {
					refreshToken: vUser.tokens.refresh
				})
				.then(b => b.data.accessToken)
			vUser.tokens = {
				...vUser.tokens,
				access: accessToken
			}
		} catch (e: any) {
			if (e.response?.status === 400) {
				console.log(e)
				vUser.clear()
				throw new Error(
					'User is now logged out (could not get new access token)'
				)
			}
			throw e
		}
	}
	return vUser.tokens.access!
}

if (typeof window !== 'undefined') {
	const payload = localStorage.getItem(LOCALSTORAGE_KEY)
	if (payload) {
		try {
			const data = JSON.parse(payload)
			vUser.tokens = {
				access: data.access || vUser.tokens.access,
				refresh: data.refresh || vUser.tokens.refresh
			}
		} catch (e) {}
	}
}

subscribeKey(vUser, 'tokens', () => {
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(vUser.tokens))
})
