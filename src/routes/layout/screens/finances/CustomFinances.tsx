import { type  FC } from "react"
import { DashboardFinance } from "src/components/screens/dashboard"
import { Finances } from "src/components/screens/finances"
import { useAuth } from "src/hooks"

const CustomFinances: FC = () => {
	const {
		isDirector
	} = useAuth()
	
	if (isDirector) return <DashboardFinance />
	
	return <Finances />
}

export { CustomFinances }
