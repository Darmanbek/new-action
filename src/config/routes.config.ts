class Routes {
	ROOT = "/"
	HOME = "/"

	PROFILE = "/profile"
	LOGIN = "/login"
	PRIVACY = "/privacy"

	DASHBOARD = "/dashboard"
	ADMINS = "/admins"
	TEACHERS = "/teachers"
	GROUPS = "/groups"
	COMPANIES = "/companies"
	ACCEPTANCES = "/acceptances"
	HOLIDAY = "/holiday"
	STORIES = "/stories"
	FINANCES = {
		ROOT: "/finances",
		PROFITS: "/finances/profits",
		DEBTORS: "/finances/debtors"
	}
	CHAT = "/chat"
}

export const ROUTES = new Routes()
