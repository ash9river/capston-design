import MapHeader from 'components/UI/MapHeader';
import NaverMapContainer from 'components/map/NaverMapContainer';

import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={styles['home-page-container']}>
      <MapHeader />
      <NaverMapContainer />
    </div>
  );
}
