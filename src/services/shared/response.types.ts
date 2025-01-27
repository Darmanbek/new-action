import { AxiosError } from "axios"

export type TResponseSingleData<T> = {
	success?: boolean
	message?: string
	data: T
}

export type TResponseData<T> = {
	success?: boolean
	message?: string
	data: T[]
}

export type TResponse<T> = {
	success?: boolean
	message?: string
	data: T[]
	links?: TLinks
	meta: TMeta
}

export type TLinks = {
	first: string
	last: string
	prev: null
	next: null
}

export type TResponseError = AxiosError<{
	message?: string
	error?: string
}>

export type TMeta = {
	current_page: number
	from: number
	last_page: number
	links: TInnerLinks[]
	path: string
	per_page: number
	to: number
	total: number
}

export type TInnerLinks = {
	url: null
	label: string
	active: boolean
}
