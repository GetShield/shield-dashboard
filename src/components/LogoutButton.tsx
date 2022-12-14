'use client'

import React from 'react'
import { vApp } from '../state/valtio/app'
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
				}}
				title="Sign Out"
			/>
		</>
	)
}

export default LogoutButton
