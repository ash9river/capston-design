/* eslint-disable global-require */
import Header from 'components/UI/Header';
import Footer from 'components/UI/Footer';
import styles from '../styles/pages/ErrorPage.module.scss';

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <div className={styles.tmp}>
            <img
              src={require('../assets/error-404.png')}
              alt="404 not Found."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
