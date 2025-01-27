import { FC, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { InnerLayout } from "src/components/layout/InnerLayout/InnerLayout"
import { MainLayout } from "src/components/layout/MainLayout/MainLayout"
import { ROUTES } from "src/config"
import { RequireAuth } from "src/hooks"
import { useGetMeQuery } from "src/services/login/login.api"
import { useAuthPersistStore } from "src/store"
import { Header } from "./Header/Header"
import { Main } from "./Main/Main"
import { Menu } from "./Menu/Menu"

const Layout: FC = () => {
	const { error } = useGetMeQuery()
	const token = useAuthPersistStore((state) => state.token)
	const navigate = useNavigate()

	useEffect(() => {
		if (error || !token) {
			navigate(ROUTES.LOGIN, {
				replace: true
			})
		}
	}, [error, navigate, token])
	return (
		<RequireAuth>
			<MainLayout>
				<Menu />
				<InnerLayout>
					<Header />
					<Main>
						<Outlet />
					</Main>
				</InnerLayout>
			</MainLayout>
		</RequireAuth>
	)
}

export { Layout }
