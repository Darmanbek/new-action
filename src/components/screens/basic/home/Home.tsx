import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Logo3 } from "src/assets/images"
import { ROUTES } from "src/config"
import { useAuth } from "src/hooks"
import styles from "./home.module.scss"

export const Home = () => {
	const navigate = useNavigate()

	const { isDirector } = useAuth()

	useEffect(() => {
		if (isDirector) {
			navigate(ROUTES.DASHBOARD, {
				replace: true
			})
			return
		}
		navigate(ROUTES.GROUPS, {
			replace: true
		})
	}, [isDirector, navigate])
	return (
		<section className={styles.home}>
			<img src={Logo3} alt={"Logo"} />
		</section>
	)
}
