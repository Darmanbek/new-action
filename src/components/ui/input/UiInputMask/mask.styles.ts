import { theme } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import ReactInputMask from "react-input-mask";
import { styled, css } from "styled-components";

interface StyledInputMaskProps {
	mySize?: SizeType;
	isInvalid?: boolean;
}

export const StyledInputMask = styled(ReactInputMask).withConfig({
	shouldForwardProp: prop => !["mySize", "isInvalid"].includes(prop),
})<StyledInputMaskProps>`${(props) => {

	const size = props.mySize || "middle";

	const { token } = theme.useToken();

	const sizeStyles = {
		"small": css`
			font-size: ${token.fontSize}px;
			padding: 0 7px;
			border-radius: ${token.borderRadiusSM}px;
			line-height: ${token.lineHeight};
		`,
		"middle": css`
			font-size: ${token.fontSize}px;
			padding: 4px 11px;
			border-radius: ${token.borderRadius}px;
			line-height: ${token.lineHeight};
		`,
		"large": css`
			font-size: ${token.fontSizeLG}px;
			padding: 7px 11px;
			border-radius: ${token.borderRadiusLG}px;
			line-height: ${token.lineHeightLG};
		`,
	}[size];

	return css`
		width: 100%;
		transition: all 0.2s;
		outline: none;
		border: 1px solid ${token.colorBorder};
		background-color: ${token.colorBgContainer};
		color: ${token.colorText};

		&::placeholder
		{
			color: ${token.colorTextPlaceholder};
			user-select: none;
			opacity: 1;
		}

		&:placeholder-shown
		{
			text-overflow: ellipsis;
		}

		&:hover:not(&:disabled)
		{
			border-color: ${token.colorPrimaryHover};
		}

		&:focus,
		&:focus-within
		{
			border-color: ${token.colorPrimary};
			box-shadow: 0 0 0 2px ${token.controlOutline};
		}

		&:active
		{
			box-shadow: 0 0 0 2px ${token.controlOutline};
		}

		${props.isInvalid && css`
			background-color: ${token.colorBgContainer};
			border-color: ${token.colorError};

			&:focus,
			&:focus-within
			{
				border-color: ${token.colorError};
				box-shadow: 0 0 0 2px ${token.colorErrorOutline};
			}

			&:hover:not(&:disabled)
			{
				border-color: ${token.colorErrorBorderHover};
				background-color: ${token.colorBgContainer};
			}
		`}

		&:disabled
		{
			cursor: not-allowed;
			background-color: ${token.colorBgContainerDisabled};
			color: ${token.colorTextDisabled};
		}

		${sizeStyles}
	`;
}}`;
