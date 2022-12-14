import { proxy } from 'valtio'
import { subscribeKey } from 'valtio/utils'

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
	if (!vUser.tokens.access) throw new Error('User not logged in')
	return vUser.tokens.access
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
