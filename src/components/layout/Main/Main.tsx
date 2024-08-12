import { ReactNode } from 'react';
import styles from './main.module.scss';
import { useMenuStore } from 'src/store';
import clsx from 'clsx';

export const Main = ({
  children,
}: React.PropsWithChildren<{ children?: ReactNode }>) => {
  const collapsed = useMenuStore((state) => state.collapsed);

  return (
    <main className={clsx(styles.main, collapsed && styles.collapsed)}>
      {children}
    </main>
  );
};
