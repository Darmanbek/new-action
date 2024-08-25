import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/es/components/Icon";
import { FC } from "react";
import { VscSettings } from "react-icons/vsc";
import { useResponsive } from "src/hooks";

const UiFilterIcon: FC<IconComponentProps> = (props) => {
	const { isMobile } = useResponsive(768);

	return (
		<Icon component={VscSettings} style={{ fontSize: isMobile ? 18 : 21 }} {...props} />
	);
};

export { UiFilterIcon };
