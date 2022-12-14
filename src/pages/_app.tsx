import '../css/_preflight.css'
import '../css/_app.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import dayjsUtc from 'dayjs/plugin/utc'
import dayjsDuration from 'dayjs/plugin/duration'
import dayjsRelativeTime from 'dayjs/plugin/relativeTime'
import dayjsAdvancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../state/api'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsDuration)
dayjs.extend(dayjsRelativeTime)
dayjs.extend(dayjsAdvancedFormat)
dayjs.Ls.en.weekStart = 1

export default function App({ Component }: AppProps) {
	return (
		<>
			<Head>
				<title>Shield Dashboard</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<MantineProvider
				theme={{
					fontFamily: 'Open Sans',
					black: '#060607',
					colorScheme: 'dark'
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				<ModalsProvider>
					<QueryClientProvider client={queryClient}>
						<Component />
					</QueryClientProvider>
				</ModalsProvider>
			</MantineProvider>
		</>
	)
}
