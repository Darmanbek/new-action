import React from "react";
import { Props } from "react-input-mask";
import { StyledInputMask } from "./mask.styles";
import { useResponsive } from "src/hooks";

interface UiPhoneInputProps {
	mySize?: "small" | "middle" | "large";
}

export const UiInputMask = (
	props: React.PropsWithChildren<UiPhoneInputProps & Props>,
) => {
	const { isMobile } = useResponsive(768);
	const { mySize, ...rest } = props;
	const { "aria-invalid": isInvalid } = props;

	return (
		<>
			<StyledInputMask
				mySize={mySize ? mySize : isMobile ? "middle" : "large"}
				isInvalid={!!isInvalid}
				{...rest}
			/>
		</>
	);
};
