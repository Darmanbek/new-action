import { api } from "src/api";
import { TResponseSingleData } from "src/services/index.types";
import { TAuthLogin, TTokenAuth, TProfileAuth } from "./login.types";

const fetchSignIn = async (
	value: TAuthLogin
): Promise<TResponseSingleData<TTokenAuth>> => {
	const response = await api.post("/admin/login", value);
	return response.data;
};

const fetchGetUser = async (): Promise<TResponseSingleData<TProfileAuth>> => {
	const response = await api.get("/auth/user");
	return response.data;
};

const fetchSignOut = async (): Promise<TResponseSingleData<void>> => {
	const response = await api.delete("/logout");
	return response.data;
};

export { fetchGetUser, fetchSignIn, fetchSignOut };
