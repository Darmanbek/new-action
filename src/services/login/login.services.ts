import { api } from "src/api";
import { TLogin, TLoginType } from "./login.types";
import { TUser } from '../index.types';

const fetchSignIn = async (value: TLogin): Promise<TLoginType<string>> => {
	const response = await api.post("/admin/login", value);
	return response.data;
};

const fetchGetUser = async (): Promise<TLoginType<TUser>> => {
	const response = await api.get("/auth/user");
	return response.data;
};

const fetchSignOut = async (): Promise<TLoginType<string>> => {
	const response = await api.delete("/logout");
	return response.data;
};

export {
    fetchGetUser,
    fetchSignIn,
    fetchSignOut
};

