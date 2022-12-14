import Image from 'next/image'
import { useEffect } from 'react'
import Button from '../../../components/Button'
import ContentWrapper from '../../../components/ContentWrapper'

export default function Home() {
	return (
		<ContentWrapper
			title="Welcome to your Shield Dashboard"
			description="Shield is a Home Security System, enabling web3 communities to grow safely and securely."
		>
			<div className="flex items-center space-x-4">
				<Button intent={'primary'} title={'Bot Risks'} />
				<Button intent={'secondary'} title={'Server Risks'} />
				<Button intent={'secondary'} title={'User Risks'} />
			</div>
			<div className="mt-8 w-full">
				<div className="h-full w-full rounded-md bg-[#100B2E] p-8">
					<h1 className="text-2xl text-white">Active Server Bots</h1>
					<div className="mt-8 grid grid-cols-6 gap-8">
						<div className="flex flex-col space-y-4">
							<div className="relative aspect-square w-full">
								<Image
									src="/azuki.png"
									alt="Azuki"
									fill
									className="rounded-md object-cover"
								/>
							</div>
							<div className="flex w-full items-start justify-between">
								<div className="flex flex-col">
									<p className="font-medium text-white">Azuki</p>
									<p className="text-sm text-white/50">Owner</p>
								</div>
								<Button intent={'primary'} title={'Go'} />
							</div>
						</div>
						<div className="flex flex-col space-y-4">
							<div className="relative aspect-square w-full">
								<Image
									src="/azuki.png"
									alt="Azuki"
									fill
									className="rounded-md object-cover"
								/>
							</div>
							<div className="flex w-full items-start justify-between">
								<div className="flex flex-col">
									<p className="font-medium text-white">Azuki</p>
									<p className="text-sm text-white/50">Owner</p>
								</div>
								<Button intent={'primary'} title={'Go'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}
