import ReactDOM from 'react-dom/client';
import App from 'src/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryProvider, AntdProvider } from 'src/providers';
import 'src/styles/antd.scss';
import 'src/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactQueryProvider>
    <Router>
      <AntdProvider>
        <App />
      </AntdProvider>
    </Router>
  </ReactQueryProvider>
);
