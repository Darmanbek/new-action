import { App as AntdApp } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/layout';
import { Auth } from 'src/components/pages';
import { useRoutes } from './routes/routes';

export default function App() {
  const routes = useRoutes();

  return (
    <AntdApp>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="/login" element={<Auth />} />
      </Routes>
    </AntdApp>
  );
}
