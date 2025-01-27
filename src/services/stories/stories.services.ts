import { api } from "src/api"
import { TResponseData, TResponseSingleData } from "src/services/shared"
import { TStory, TStoryChange } from "./stories.types"

const axiosGetStories = async (): Promise<TResponseData<TStory>> => {
	const response = await api.get(`/admin/stories`)
	return response.data
}

const axiosCreateStories = async (form: TStoryChange): Promise<TResponseSingleData<TStory>> => {
	const response = await api.post(`/admin/stories`, form)
	return response.data
}

const axiosEditStories = async (form: TStoryChange): Promise<TResponseSingleData<TStory>> => {
	const response = await api.put(`/admin/stories/${form.id}`, form)
	return response.data
}

const axiosDeleteStories = async (id?: number | string): Promise<TResponseSingleData<void>> => {
	const response = await api.delete(`/admin/stories/${id}`)
	return response.data
}

export { axiosGetStories, axiosCreateStories, axiosEditStories, axiosDeleteStories }
