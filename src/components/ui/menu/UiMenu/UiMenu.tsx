import { ConfigProvider, Menu, MenuProps } from 'antd';
import { FC } from "react";

const UiMenu: FC<MenuProps> = (props) => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						groupTitleColor: '#121926',
						itemHoverBg: '#E3F2FD',
						itemSelectedColor: '#009746',
						subMenuItemBg: '#fff',
						controlItemBgActive: '#E3F2FD',
						groupTitleFontSize: 14,
					},
				},
			}}
		>
			<Menu {...props}/>
		</ConfigProvider>
	);
};

export { UiMenu };
