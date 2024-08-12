import { HeaderLeft } from './HeaderLeft/HeaderLeft';
import { HeaderRight } from './HeaderRight/HeaderRight';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
};
