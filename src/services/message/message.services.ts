import { api } from "src/api";
import {
	TResponseData,
	TResponseSingleData,
	TGetParams,
} from "src/services/index.types";
import { TMessage, TMessageChange, TMessageItem } from "src/services/shared/message/message.types";

const axiosGetMessage = async (
	params: TGetParams,
): Promise<TResponseData<TMessage>> => {
	const response = await api.get(`/admin/message`, { params });
	return response.data;
};

const axiosGetMessageById = async (id?: number | string): Promise<TResponseData<TMessageItem>> => {
	const response = await api.get(`/admin/message/${id}`);
	return response.data;
};

const axiosCreateMessage = async (
	value: TMessageChange,
): Promise<TResponseSingleData<TMessageItem>> => {
	const response = await api.post(`/admin/message`, value);
	return response.data;
};

const axiosEditMessage = async (
	value: Record<string, unknown>,
): Promise<TResponseSingleData<TMessageItem>> => {
	const response = await api.put(`/admin/messages/${value.id}`, value);
	return response.data;
};

export {
	axiosGetMessage,
	axiosGetMessageById,
	axiosCreateMessage,
	axiosEditMessage,
};
