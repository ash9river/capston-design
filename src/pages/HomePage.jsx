import MapHeader from 'components/UI/MapHeader';
import GoogleMapContainer from 'components/map/GoogleMapContainer';

import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={styles['home-page-container']}>
      <MapHeader />
      <GoogleMapContainer />
    </div>
  );
}
