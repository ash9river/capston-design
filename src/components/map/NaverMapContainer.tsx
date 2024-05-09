import { Container as MapDiv, NavermapsProvider } from 'react-naver-maps';
import NaverMapContent from './NaverMapContent';
import styles from './NaverMapContainer.module.scss';

const latitude = 37.3595704;
const longitude = 127.105399;

function NaverMapContainer() {
  return (
    <NavermapsProvider
      finClientId={process.env.REACT_APP_NAVER_CLIENT_ID as string}
    >
      <MapDiv className={styles['map-div']}>
        <NaverMapContent />
      </MapDiv>
    </NavermapsProvider>
  );
}

export default NaverMapContainer;
