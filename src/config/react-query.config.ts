import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			retry: 1,
			retryDelay: 1000,
		},
	},
});

export { queryClient };
