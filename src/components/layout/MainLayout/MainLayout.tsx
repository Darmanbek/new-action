import { type FC, type PropsWithChildren } from "react"
import styles from "./main.layout.module.scss"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return <section className={styles.layout}>{children}</section>
}

export { MainLayout }
