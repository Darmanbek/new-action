import { theme } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import ReactInputMask from "react-input-mask";
import { styled, css } from "styled-components";

interface StyledInputMaskProps {
	size?: SizeType;
}

export const StyledInputMask = styled(ReactInputMask).withConfig({
	shouldForwardProp: prop => !["size"].includes(prop),
})<StyledInputMaskProps>`${(props) => {

	const { size = "middle" } = props;

	const { token } = theme.useToken();

	const fontSize = {
		"small": "14px",
		"middle": "14px",
		"large": "16px",
	}[size] ?? "14px";
	const padding = {
		"small": "0 7px",
		"middle": "4px 11px",
		"large": "7px 11px",
	}[size] ?? "";
	const borderRadius = {
		"small": "4px",
		"middle": "6px",
		"large": "8px",
	}[size];
	const lineHeight = {
		"small": 1.5714285714285714,
		"middle": 1.5714285714285714,
		"large": 1.5,
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

		&:hover:not(.disabled)
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

		&:invalid
		{
			background-color: ${token.colorBgContainer};
			border-color: ${token.colorError};

			&:focus,
			&:focus-within
			{
				border-color: ${token.colorError};
				box-shadow: 0 0 0 2px ${token.colorErrorOutline};
			}

			&:hover
			{
				border-color: ${token.colorErrorBorderHover};
				background-color: ${token.colorBgContainer};
			}
		}

		&:disabled
		{
			cursor: not-allowed;
			background-color: ${token.colorBgContainerDisabled};
			color: ${token.colorTextDisabled};
		}

		font-size: ${fontSize};
		padding: ${padding};
		border-radius: ${borderRadius};
		line-height: ${lineHeight};
	`;
}}`;
