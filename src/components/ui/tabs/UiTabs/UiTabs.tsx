import { ConfigProvider, Tabs, TabsProps } from "antd";
import { FC } from "react";

const UiTabs: FC<TabsProps> = (props) => {
  return (
    <ConfigProvider>
      <Tabs
        tabBarStyle={{
          marginBottom: 0,
        }}
        type={"card"}
        animated={true}
        {...props}
      />
    </ConfigProvider>
  );
};

export { UiTabs };
