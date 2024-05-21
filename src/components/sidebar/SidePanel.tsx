import { useRecoilValue } from 'recoil';
import { sidebarIsOpenState } from 'store/atoms/sideBarIsOpenState';
import { markerDataState } from 'store/atoms/markerDataState';
import { shopState } from 'store/atoms/shopState';
import SearchBar from './SearchBar';
import styles from './SidePanel.module.scss';

function SidePanel() {
  const isOpen = useRecoilValue(sidebarIsOpenState);
  const markerData = useRecoilValue(markerDataState);
  const shopData = useRecoilValue(shopState);

  return (
    <div className={styles['panel-container']}>
      <SearchBar />
      <div className={styles['iframe-container']}>
        {/* {isOpen && 'asd'} */}
        {markerData &&
          markerData.map((item: any) => {
            return item.name === shopData ? (
              <iframe
                key={item.name}
                className={styles.frame}
                id="entryIframe"
                title="Naver Place Entry"
                src={item.src}
              />
            ) : null;
          })}
      </div>
    </div>
  );
}

export default SidePanel;
