import { api } from "src/api";
import { TResponseData, TResponseSingleData } from "src/services/index.types";
import { TStory, TStoryChange } from "./stories.types";

const axiosGetStory = async (): Promise<TResponseData<TStory>> => {
	const response = await api.get(`/admin/stories`);
	return response.data;
};

const axiosCreateStory = async (form: TStoryChange): Promise<TResponseSingleData<TStory>> => {
	const response = await api.post(`/admin/stories`, form);
	return response.data;
};

const axiosEditStory = async (form: TStoryChange): Promise<TResponseSingleData<TStory>> => {
	const response = await api.put(`/admin/stories/${form.id}`, form);
	return response.data;
};

const axiosDeleteStory = async (id?: number | string): Promise<TResponseSingleData<void>> => {
	const response = await api.delete(`/admin/stories/${id}`);
	return response.data;
};

export {
	axiosGetStory,
	axiosCreateStory,
	axiosEditStory,
	axiosDeleteStory
};
