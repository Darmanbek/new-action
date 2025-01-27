import { EnumStorage } from "src/data"

type JsonToken = {
	state?: {
		token?: string
	}
}

export const getToken = () => {
	const token = localStorage.getItem(EnumStorage.TOKEN) || ""
	const jsonToken: JsonToken = JSON.parse(token)
	return jsonToken?.state?.token || null
}
