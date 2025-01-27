import ReactDOM from "react-dom/client"
import { App } from "src/App"
import { AntdProvider, ReactQueryProvider } from "src/providers"
import "react-chat-elements/dist/main.css"
import "src/assets/styles/antd.scss"
import "src/assets/styles/index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ReactQueryProvider>
		<AntdProvider>
			<App />
		</AntdProvider>
	</ReactQueryProvider>
)
