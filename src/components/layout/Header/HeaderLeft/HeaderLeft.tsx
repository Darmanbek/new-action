import { UiButton } from 'src/components/ui';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useMenuStore } from 'src/store';
import { useResponsive } from 'src/hooks';
import styles from './left.module.scss';

export const HeaderLeft = () => {
  const { collapsed, toggleCollapsed, open, toggleOpen } = useMenuStore();
  const { isMobile } = useResponsive(768);

  const active = isMobile ? open : collapsed;
  const onToggleActive = isMobile ? toggleOpen : toggleCollapsed;

  const onToggleMenu = () => {
    onToggleActive();
  };

  const MenuIcon = active ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;

  return (
    <div className={styles.left}>
      <UiButton
        type="text"
        className={styles.burger}
        icon={MenuIcon}
        onClick={onToggleMenu}
        aria-label="burger"
      />
    </div>
  );
};
