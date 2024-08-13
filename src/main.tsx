import ReactDOM from "react-dom/client";
import App from "src/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryProvider, AntdProvider } from "src/providers";
import "react-chat-elements/dist/main.css"
import "src/assets/styles/antd.scss";
import "src/assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ReactQueryProvider>
		<Router>
			<AntdProvider>
				<App />
			</AntdProvider>
		</Router>
	</ReactQueryProvider>,
);
