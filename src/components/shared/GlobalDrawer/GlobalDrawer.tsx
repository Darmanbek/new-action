import { LockOutlined } from "@ant-design/icons"
import { DrawerProps, Flex, Space } from "antd"
import { FormInstance } from "antd/lib/form/hooks/useForm"
import { FC, useEffect } from "react"
import { UiButton, UiDrawer } from "src/components/ui"
import { useFormStorageStore } from "src/store"
import { useShallow } from "zustand/react/shallow"

interface GlobalDrawerProps {
	form: FormInstance
	width?: number
	isLoading: boolean
	isError: boolean
}

const GlobalDrawer: FC<GlobalDrawerProps & DrawerProps> = (props) => {
	const { form, width, isLoading, isError, ...rest } = props
	const { paramsForm, isDrawer, toggleDrawer, setParamsItem } = useFormStorageStore(
		useShallow((state) => state)
	)

	const onCloseDrawer = () => {
		if (isDrawer) {
			toggleDrawer()
		}
		form.resetFields()
		setParamsItem(null)
	}

	useEffect(() => {
		if (!isError && !isLoading) {
			onCloseDrawer()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, isError])

	return (
		<UiDrawer
			forceRender={true}
			title={paramsForm ? "Изменить" : "Добавить"}
			width={width || 350}
			closeIcon={<LockOutlined />}
			placement={"right"}
			open={isDrawer}
			onClose={onCloseDrawer}
			footer={
				<Flex justify={"flex-end"}>
					<Space>
						<UiButton onClick={onCloseDrawer} aria-label={"Cancel"}>
							Отмена
						</UiButton>
						<UiButton
							type={"primary"}
							htmlType={"submit"}
							onClick={form.submit}
							loading={isLoading}
							aria-label={"Save"}
						>
							Сохранить
						</UiButton>
					</Space>
				</Flex>
			}
			{...rest}
		/>
	)
}

export { GlobalDrawer }
