import { Result } from 'antd';
import styles from './not.found.module.scss';

export const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <Result
        className={styles.result}
        status="404"
        title="404"
        subTitle="Страница не найдена."
      />
    </div>
  );
};
