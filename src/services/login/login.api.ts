import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/config";
import { useMessage } from "src/hooks";
import { useAuthPersistStore } from "src/store";
import { errorResponse } from "src/utils";
import { TResponseError } from "src/services/index.types";
import {
	fetchGetUser,
	fetchSignIn,
	fetchSignOut
} from "./login.services";

const useSignInMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: fetchSignIn,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["login"],
			});
			queryClient.invalidateQueries();
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const meQueryOptions = {
	queryFn: fetchGetUser,
	queryKey: ["login"],
};

const useGetMeQuery = () => {
	const { message } = useMessage();
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
	const { message } = useMessage();
	const navigate = useNavigate();
	return useMutation({
		mutationFn: fetchSignOut,
		onSuccess: async () => {
			await message.success("Успешно");
			navigate(ROUTES.LOGIN);
		},
		onError: async (error: TResponseError) => {
			await message.error(errorResponse(error));
			navigate(ROUTES.LOGIN);
		},
	});
};

export { meQueryOptions, useGetMeQuery, useSignInMutation, useSignOutMutation };
