// colors
import { completeName } from "src/utils";

export const primaryColor = "#DE070F" as const;
export const primaryBgColor = "#faf8f8" as const;
export const primaryBgColorComponents = "#ffe8e8" as const;

export const primaryColorText = "rgba(22, 52, 88, 0.88)" as const;
export const primaryColorSubText = "rgba(22, 52, 88, 0.6)" as const;

// sizes
export const primaryBoxShadow = "0px 2px 14px 2px rgba(229, 229, 229, 0.33)" as const;
export const primaryBorderRadius = 8 as const;


export const completeData = [
	{
		value: 0,
		text: completeName(false),
	},
	{
		value: 1,
		text: completeName(true),
	},
];
