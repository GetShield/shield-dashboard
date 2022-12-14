import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { vUser } from '../../state/valtio/user'

export default function AuthHandoffPage() {
	const router = useRouter()
	const [token, error] = [router.query.token, router.query.error]

	useEffect(() => {
		if (typeof token === 'string') {
			vUser.tokens = {
				access: token,
				refresh: null
			}
			router.push('/modules')
		}
	}, [token])

	return (
		<div className="flex w-full items-center justify-center">
			{/* <div className="flex h-80 w-full max-w-[40rem] flex-col rounded-md bg-secondary p-8 text-white">
				Tnst
			</div> */}
		</div>
	)
}
