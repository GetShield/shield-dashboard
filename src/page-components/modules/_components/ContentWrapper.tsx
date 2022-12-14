import React from 'react'

const ContentWrapper = ({
	children,
	title,
	description
}: {
	children: React.ReactNode
	title: string
	description: string
}) => {
	return (
		<div className="h-full w-full">
			<h1 className="mb-2 text-4xl text-white">{title}</h1>
			<p className="mb-4 text-white/50">{description}</p>
			{children}
		</div>
	)
}

export default ContentWrapper
