import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import Pusher from "pusher-js";
import { useEffect } from "react";
import { PUSHER_KEY, pusherOptions } from "src/config";
import { errorResponse } from "src/utils";
import { TGetParams, TResponseError } from "src/services/index.types";
import {
	axiosGetMessage,
	axiosGetMessageById,
	axiosCreateMessage,
	axiosEditMessage
} from "src/services/shared/message/message.services";

const useGetMessageQuery = (params: TGetParams) => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetMessage(params),
		queryKey: ["message", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetMessageByIdPusherQuery = (id?: number | string) => {
	const queryClient = useQueryClient();
	useEffect(() => {
		const pusher = new Pusher(PUSHER_KEY, pusherOptions);

		const channel = pusher.subscribe(`new-action-chat.${id}.messages`);

		const handleCall = (event: any) => {
			queryClient.setQueryData(["message", id], (oldData: any) => {
				const newArray = [...oldData.data, event];
				return { data: newArray };
			});
		};

		channel.bind("chat", handleCall);

		return () => {
			channel.unbind("chat", handleCall);
			pusher.unsubscribe("chat");
		};
	}, [id, queryClient]);
};

const useGetMessageByIdQuery = (id?: number | string) => {
	useGetMessageByIdPusherQuery(id);
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetMessageById(id),
		queryKey: ["message", id],
		keepPreviousData: true,
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateMessageMutation = () => {
	const { message } = App.useApp();
	// const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateMessage,
		// onSuccess: () => {
		// 	queryClient.invalidateQueries({
		// 		queryKey: ["message"],
		// 	});
		// },
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditMessageMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditMessage,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["message"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetMessageQuery,
	useGetMessageByIdQuery,
	useCreateMessageMutation,
	useEditMessageMutation,
};
