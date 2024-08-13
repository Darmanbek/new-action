import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { useMessage } from "src/hooks";
import { useAuthPersistStore } from "src/store";
import { errorResponse } from "src/utils";
import { TResponseError } from "../index.types";
import { fetchGetUser, fetchSignIn, fetchSignOut } from "./auth.services";

const useSignInMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: fetchSignIn,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["login"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetMeQuery = () => {
	const { message } = App.useApp();
	const signOut = useAuthPersistStore((state) => state.signOut);
	return useQuery({
		queryFn: fetchGetUser,
		queryKey: ["login"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
			signOut();
		},
	});
};

const useSignOutMutation = () => {
	const { message } = App.useApp();
	return useMutation({
		mutationFn: fetchSignOut,
		onSuccess: () => {
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export { useGetMeQuery, useSignInMutation, useSignOutMutation };
