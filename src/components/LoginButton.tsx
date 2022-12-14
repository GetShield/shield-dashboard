'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'
import Button from './Button'

const LoginButton = () => {
	return (
		<>
			<Button
				intent={'primary'}
				onConfirm={() => signIn('discord')}
				title="Sign In"
			/>
		</>
	)
}

export default LoginButton
