import { FC } from "react";
import ReactInputMask, { Props } from "react-input-mask";
import styles from "./mask.module.scss";
import clsx from "clsx";

interface UiPhoneInputProps {
	mySize?: "small" | "middle" | "large";
}

const UiInputMask: FC<UiPhoneInputProps & Props> = (props) => {
	const { mySize, ...rest } = props;
	const { "aria-invalid": isInvalid, disabled } = props;
	
	return (
		<>
			<ReactInputMask
				{...rest}
				className={clsx(
					styles.phone,
					styles[mySize ? mySize : "middle"],
					isInvalid && styles.error,
					disabled && styles.disabled
				)}
			/>
		</>
	);
};

export { UiInputMask };
