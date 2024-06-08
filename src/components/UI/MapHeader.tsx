import MapSideBar from 'components/sidebar/MapSideBar';
import { useSetRecoilState } from 'recoil';
import { sidebarIsOpenState } from 'store/atoms/sideBarIsOpenState';
import { shopState } from 'store/atoms/shopState';
import styles from './MapHeader.module.scss';
import logo from '../../assets/naverLogo.png';

const items = [
  { itemId: 1, content: '카페공장', rl: '카페 할아버지공장' },
  { itemId: 2, content: '안녕과자점', rl: '안녕과자점' },
  { itemId: 3, content: '포옹남', rl: '포옹남 성수송정점' },
];

function MapHeader() {
  const setIsOpen = useSetRecoilState(sidebarIsOpenState);
  const setShopState = useSetRecoilState(shopState);
  function handleClick(name: string) {
    setIsOpen(true);
    setShopState(name);
  }

  return (
    <header className={styles['map-header']}>
      <img className={styles.logo} src={logo} alt="react logo" />
      <ul className={styles['map-container']}>
        {items.map((item) => {
          return (
            <li key={item.itemId} className={styles['map-li']}>
              <button
                type="button"
                className={styles['map-li-button']}
                onClick={() => handleClick(item.rl)}
              >
                <img
                  className={styles['category-img']}
                  src="https://map.pstatic.net/resource/api/v2/image/maps/selected-marker/restaurant@2x.png?version=8"
                  alt="spoon"
                />
                <p>{item.content}</p>
              </button>
            </li>
          );
        })}
      </ul>
      <MapSideBar />
    </header>
  );
}

export default MapHeader;
