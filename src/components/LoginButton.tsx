'use client'

import React from 'react'
import { AppEnv } from '../env'
import Button from './Button'

const LoginButton = () => {
	return (
		<>
			<Button
				intent={'primary'}
				onConfirm={() => {
					document.location = AppEnv.apiBase + '/auth/discord'
				}}
				title="Sign In"
			/>
		</>
	)
}

export default LoginButton
