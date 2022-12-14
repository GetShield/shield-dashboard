import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { AppEnv } from '../env'

export const api = axios.create({
	baseURL: AppEnv.apiBase
})

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false
		}
	}
})
