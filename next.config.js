/** @type {import('next').NextConfig} */
module.exports = {
	swcMinify: true,
	reactStrictMode: false,
	typescript: {
		ignoreBuildErrors: true
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/modules',
				permanent: false
			}
		]
	}
}
