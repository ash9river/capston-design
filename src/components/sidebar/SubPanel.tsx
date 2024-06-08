import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCongest } from 'services/getCongest';
import styles from './SubPanel.module.scss';
import Loader from './Loader';
import CongestBar from './CongestBar';

function SubPanel({
  id,
  name,
  src,
}: {
  id: number;
  name: string;
  src: string;
}) {
  const { data: marker } = useQuery({
    queryKey: ['marker', `${id}`],
    queryFn: () => getCongest({ id }),
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(marker);
  }, [marker]);

  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && marker && <CongestBar congest={marker.congest} />}
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
