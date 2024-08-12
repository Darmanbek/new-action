import { images } from 'src/assets/images';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <section className={styles.home}>
      <img src={images.logo.Logo3} alt="Logo" />
    </section>
  );
};
