import { useState } from 'react';
import styles from './SubPanel.module.scss';
import Loader from './Loader';

function SubPanel({ name, src }: { name: string; src: string }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && <Loader />}
      <iframe
        key={name}
        className={styles.frame}
        id="entryIframe"
        title="Naver Place Entry"
        src={src}
        onLoad={handleLoad}
      />
    </>
  );
}

export default SubPanel;
