export const getDayTime = () => {
	const hour = new Date().getHours()
	if ([7, 8, 9, 10, 11, 12].includes(hour)) {
		return "Доброе утро,"
	}
	if ([13, 14, 15, 16, 17, 18].includes(hour)) {
		return "Добрый день,"
	}
	if ([22, 23, 0, 1, 22].includes(hour)) {
		return "Добрый вечер,"
	}
	return "Добрая ночь,"
}

export const inputPlaceholder = "Введите, пожалуйста"
export const selectPlaceholder = "Выберите, пожалуйста"
export const datePlaceholder = "Выберите дату"
