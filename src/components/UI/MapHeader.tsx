import MapSideBar from 'components/sidebar/MapSideBar';
import styles from './MapHeader.module.scss';
import logo from '../../logo.svg';

const items = [
  { itemId: 1, content: 'a' },
  { itemId: 2, content: 'b' },
  { itemId: 3, content: 'c' },
  { itemId: 4, content: 'd' },
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
