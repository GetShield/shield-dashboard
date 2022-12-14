'use client'

import { vUser } from '../state/valtio/user'
import Button from './Button'

const LogoutButton = () => {
	return (
		<>
			<Button
				intent={'primary'}
				onConfirm={() => {
					vUser.tokens = {
						access: null,
						refresh: null
					}
					setTimeout(() => window.location.reload(), 10)
				}}
				title="Sign Out"
			/>
		</>
	)
}

export default LogoutButton
