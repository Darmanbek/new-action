import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";

import {
	fetchGetUser,
	fetchSignIn,
	fetchSignOut,
} from "./login.services";

import { useAuthPersistStore } from "src/store";

import { TResponseError } from "../index.types";

const useSignInMutation = () => {
	const { message } = App.useApp()
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: fetchSignIn,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["login"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useGetMeQuery = () => {
	const { message } = App.useApp()
	const signOut = useAuthPersistStore((state) => state.signOut);
	const query = useQuery({
		queryFn: fetchGetUser,
		queryKey: ["login"],
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
			signOut();
		},
	});
	return query;
};

const useSignOutMutation = () => {
	const { message } = App.useApp()
	const mutation = useMutation({
		mutationFn: fetchSignOut,
		onSuccess: () => {
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

export {
	useGetMeQuery,
	useSignInMutation,
	useSignOutMutation,
};
