import { useMessage } from "src/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosCreateStory, axiosDeleteStory, axiosEditStory, axiosGetStory } from "./stories.services";
import type { TResponseError } from "src/services/index.types";


const useGetStoryQuery = () => {
	const { message } = useMessage();
	return useQuery({
		queryFn: axiosGetStory,
		queryKey: ["story"],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message);
		},
	});
};

const useCreateStoryMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateStory,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["story"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message);
		},
	});
};

const useEditStoryMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditStory,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["story"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message);
		},
	});
};

const useDeleteStoryMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeleteStory,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["story"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message);
		},
	});
};

export {
	useGetStoryQuery,
	useCreateStoryMutation,
	useEditStoryMutation,
	useDeleteStoryMutation
};
