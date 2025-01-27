import axios, { type InternalAxiosRequestConfig } from "axios"
import { BASE_URL } from "src/config"
import { getToken } from "src/utils/storage"

const api = axios.create({
	baseURL: BASE_URL
})

const authInterceptor = <T extends InternalAxiosRequestConfig>(config: T) => {
	const token = getToken()
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
}

api.interceptors.request.use(authInterceptor)

export { api }
