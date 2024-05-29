import { App, Form, FormProps, Input, Spin } from "antd";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "src/components/shared";
import { UiButton, UiInputMask } from "src/components/ui";

import { useSignInMutation } from "src/services";
import { TLogin } from "src/services/index.types";

import { useAuthPersistStore } from "src/store";

import styles from "./auth.module.scss";

const Auth: FC = () => {
	const {
		data: loginData,
		mutate: login,
		isSuccess,
		isLoading,
	} = useSignInMutation();
	const { signIn } = useAuthPersistStore();
	const navigate = useNavigate();

	const onFinish: FormProps<TLogin>["onFinish"] = ({ phone, password }) => {
		const formData = {
			phone: phone.replace(/ /g, "").substring(1),
			password,
		};
		login(formData);
	};

	useEffect(() => {
		if (isSuccess) {
			signIn({
				token: loginData.data,
			});
			navigate("/", { replace: true });
		}
	}, [isSuccess, login, loginData, navigate, signIn]);
	return (
		<section className={styles.auth}>
			<div className={styles.block}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<h2 className={styles.title}>Добро пожаловать</h2>
				<Form
					layout="vertical"
					className={styles.form}
					name="login"
					initialValues={{
						phone: "",
					}}
					onFinish={onFinish}
					autoComplete="off"
					size="large"
				>
					<Form.Item<TLogin>
						name="phone"
						rules={[
							{
								required: true,
								message: "Пожалуйста, введите номер телефона!",
							},
						]}
					>
						<UiInputMask
							placeholder="Телефон номер"
							mask="+\9\98 99 999 99 99"
							mySize="large"
						/>
					</Form.Item>

					<Form.Item<TLogin>
						name="password"
						rules={[
							{
								required: true,
								message: "Пожалуйста, введите пароль!",
							},
						]}
					>
						<Input.Password placeholder="Пароль" />
					</Form.Item>

					<Form.Item>
						<UiButton
							type="primary"
							htmlType="submit"
							className={styles.submit}
							disabled={isLoading}
						>
							{isLoading ? <Spin /> : "Войти"}
						</UiButton>
					</Form.Item>
				</Form>
			</div>
		</section>
	);
};

export { Auth }
