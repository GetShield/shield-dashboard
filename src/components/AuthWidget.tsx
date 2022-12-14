import { useUser } from '../state/react-query/useUser'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export function AuthWidget() {
	const user = useUser()

	return user.data ? (
		<>
			<div className="relative h-10 w-10">
				<img
					src={user.data.avatarUrl || '/azuki.png'}
					alt="avatar"
					className="rounded-full object-cover"
				/>
			</div>
			<LogoutButton />
		</>
	) : (
		<LoginButton />
	)
}
