export const getRoleFromToken = (): string | null => {
	const token = localStorage.getItem("token");

	if (token) {
		try {
			const parsedToken = JSON.parse(token);
			return parsedToken.state?.role || null;
		} catch (error) {
			console.error("Ошибка анализа токена:", error);
			return null;
		}
	} else {
		console.log("Токен не найден в localStorage!");
		return null;
	}
};
