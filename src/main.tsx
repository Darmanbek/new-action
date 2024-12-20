import ReactDOM from "react-dom/client";
import "react-chat-elements/dist/main.css";
import "src/assets/styles/antd.scss";
import "src/assets/styles/index.scss";
import { App } from "src/App";
import { AntdProvider, ReactQueryProvider } from "src/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ReactQueryProvider>
		<AntdProvider>
			<App />
		</AntdProvider>
	</ReactQueryProvider>
);
