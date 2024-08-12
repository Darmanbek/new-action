export const roleColor = (role?: number) => {
	switch (role) {
		case 1:
			return "magenta";
		case 2:
			return "geekblue";
		case 3:
			return "cyan";
		default:
			return "green";
	}
};
