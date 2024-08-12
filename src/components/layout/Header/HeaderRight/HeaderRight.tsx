import { useEffect } from 'react';
import { Divider, Popover, Space, Spin, Tag, Tooltip, Avatar } from 'antd';
import {
  FullscreenOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import screenfull from 'screenfull';
import { UiButton, UiMenu } from 'src/components/ui';
import { useAuthPersistStore, useMenuStore } from 'src/store';
import { useGetMeQuery, useSignOutMutation } from 'src/services/index.api';
import { getDayTime } from 'src/utils';
import { images } from 'src/assets/images/index';
import styles from './right.module.scss';

export const HeaderRight = () => {
  const { profileOpen, setProfileOpen } = useMenuStore();
  const { signOut } = useAuthPersistStore();
  const { data: user } = useGetMeQuery();
  const { mutate: logout, isSuccess, isLoading } = useSignOutMutation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onSelectMenuItem = (key: string) => {
    if (key === '/logout') {
      logout();
      return;
    }
    navigate(key);
    setProfileOpen(false);
  };

  const content = (
    <div className={styles.content}>
      <div className={styles.title}>
        <h4>{getDayTime()}</h4>
        <span>
          {user ? `${user.data.first_name} ${user.data.last_name}` : '-'}
        </span>
      </div>
      <Divider plain style={{ margin: '15px 0' }}>
        <p className={styles.role}>
          <Tag color="green">{user ? user.data.role : '-'}</Tag>
        </p>
      </Divider>
      <div className={styles.logo}>
        <img src={images.logo.Logo2} alt="Logo" />
      </div>
      <UiMenu
        mode="inline"
        items={[
          {
            type: 'divider',
            style: { margin: '15px 0' },
          },
          {
            key: '/profile',
            label: 'Настройка аккаунта',
            icon: <SettingOutlined />,
          },
          {
            key: '/logout',
            icon: isLoading ? null : <LogoutOutlined />,
            label: isLoading ? (
              <div style={{ textAlign: 'center' }}>
                <Spin />
              </div>
            ) : (
              'Выйти'
            ),
            disabled: isLoading,
          },
        ]}
        selectedKeys={[pathname]}
        onSelect={(e) => onSelectMenuItem(e.key)}
      />
    </div>
  );

  useEffect(() => {
    if (isSuccess) {
      signOut();
      setProfileOpen(false);
    }
  }, [isSuccess]);

  return (
    <div className={styles.right}>
      <Space>
        <Tooltip placement="bottom" title="Полный экран" zIndex={1500}>
          <UiButton
            type="text"
            className={styles.fullscreen}
            onClick={() => screenfull.toggle()}
            aria-label="fullscreen"
            icon={<FullscreenOutlined />}
          />
        </Tooltip>
        <Popover
          open={profileOpen}
          trigger="click"
          placement="bottomLeft"
          arrow={false}
          content={content}
          onOpenChange={setProfileOpen}
        >
          <UiButton
            type="text"
            aria-label="settings"
            className={styles.settings}
            borderRadius={20}
          >
            <Avatar
              className={styles.avatar}
              src={<img src={images.logo.Logo1} alt="Logo" />}
              alt="avatar"
            />
            <SettingOutlined />
          </UiButton>
        </Popover>
      </Space>
    </div>
  );
};
