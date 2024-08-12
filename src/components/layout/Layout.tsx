import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Menu } from './Menu/Menu';
import { Main } from './Main/Main';
import { RequireAuth } from 'src/hooks';
import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <RequireAuth>
      <section className={styles.layout}>
        <Menu />
        <div className={styles['layout-has-menu']}>
          <Header />
          <Main>
            <Outlet />
          </Main>
        </div>
      </section>
    </RequireAuth>
  );
};
