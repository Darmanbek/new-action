import type { ButtonProps, FormProps } from "antd"
import { Divider, Form, Input, Spin } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Logo1 } from "src/assets/images"
import { UiButton, UiInputMask } from "src/components/ui"
import { type TAuthLogin, useSignInMutation } from "src/services/login"
import { useAuthPersistStore } from "src/store"
import { phoneReverseFormatter } from "src/utils"
import styles from "./login.module.scss"

export const Login = () => {
	const navigate = useNavigate()
	const { data: loginData, mutate: login, isSuccess, isLoading } = useSignInMutation()
	const { signIn } = useAuthPersistStore()

	const onFinish: FormProps<TAuthLogin>["onFinish"] = ({ phone, password }) => {
		const formData = {
			phone: phoneReverseFormatter(phone),
			password
		}
		login(formData)
	}

	useEffect(() => {
		if (isSuccess) {
			const { role, role_id, token, company } = loginData.data
			signIn({ role, role_id, token, company })
			navigate("/", { replace: true })
		}
	}, [isSuccess, login, loginData, navigate, signIn])

	return (
		<section className={styles.auth}>
			<div className={styles.block}>
				<div className={styles.logo}>
					<img src={Logo1} alt={"Logo"} />
				</div>
				<div className={styles.info}>
					<h2 className={styles.title}>Добро пожаловать</h2>
					<p className={styles.subtitle}>Введите свои учетные данные, чтобы продолжить</p>
				</div>
				<Form
					layout={"vertical"}
					className={styles.form}
					name={"login"}
					initialValues={{ phone: "" }}
					onFinish={onFinish}
					autoComplete={"off"}
					size={"large"}
				>
					<Form.Item<TAuthLogin>
						name={"phone"}
						rules={[
							{
								required: true,
								message: "Пожалуйста, введите номер телефона!"
							}
						]}
					>
						<UiInputMask placeholder={"Телефон номер"} mask={"+\\9\\98 99 999 99 99"} />
					</Form.Item>

					<Form.Item<TAuthLogin>
						name={"password"}
						rules={[
							{
								required: true,
								message: "Пожалуйста, введите пароль!"
							}
						]}
					>
						<Input.Password placeholder={"Пароль"} />
					</Form.Item>
					<Divider></Divider>
					<Form.Item<ButtonProps>>
						<UiButton
							type={"primary"}
							htmlType={"submit"}
							className={styles.submit}
							disabled={isLoading}
						>
							{isLoading ? <Spin /> : "Войти"}
						</UiButton>
					</Form.Item>
				</Form>
			</div>
		</section>
	)
}
