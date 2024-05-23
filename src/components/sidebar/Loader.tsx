import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.icon} />
      <div className={styles.icon} />
      <div className={styles.icon} />
    </div>
  );
}

export default Loader;
