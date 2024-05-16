import MapSideBar from 'components/sidebar/MapSideBar';
import styles from './MapHeader.module.scss';
import logo from '../../assets/naverLogo.png';

const items = [
  { itemId: 1, content: '포옹남' },
  { itemId: 2, content: 'b' },
  { itemId: 3, content: 'c' },
];

function MapHeader() {
  return (
    <header className={styles['map-header']}>
      <img className={styles.logo} src={logo} alt="react logo" />
      <ul className={styles['map-container']}>
        {items.map((item) => {
          return <li key={item.itemId}>{item.content}</li>;
        })}
      </ul>
      <MapSideBar />
    </header>
  );
}

export default MapHeader;
