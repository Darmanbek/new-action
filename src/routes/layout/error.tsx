import { Flex, Result } from "antd"
import { AxiosError } from "axios"
import { type  FC } from "react"
import { ErrorResponse, useRouteError } from "react-router-dom"
import { UiCard } from "src/components/ui"

const LayoutError: FC = () => {
	const error = useRouteError() as Error & ErrorResponse & AxiosError
	return (
		<UiCard
			style={{ flex: 1, display: "flex", flexDirection: "column" }}
			styles={{ body: { flex: 1, display: "flex", flexDirection: "column" } }}
		>
			<Flex
				align={"center"}
				justify={"center"}
				flex={1}
				id={"error-page"}
			>
				<Result
					status={500}
					title={error?.status || error?.response?.status || "500"}
					subTitle={error?.statusText || error?.message}
				/>
			</Flex>
		</UiCard>
	)
}

export { LayoutError }
