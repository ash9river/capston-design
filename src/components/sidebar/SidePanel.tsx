import { useRecoilValue } from 'recoil';
import { sidebarIsOpenState } from 'store/atoms/sideBarIsOpenState';
import { markerDataState } from 'store/atoms/markerDataState';
import { shopState } from 'store/atoms/shopState';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import styles from './SidePanel.module.scss';
import Loader from './Loader';
import SubPanel from './SubPanel';

function SidePanel() {
  const isOpen = useRecoilValue(sidebarIsOpenState);
  const markerData = useRecoilValue(markerDataState);
  const shopData = useRecoilValue(shopState);

  return (
    <div className={styles['panel-container']}>
      <SearchBar />
      <div className={styles['iframe-container']}>
        {markerData &&
          markerData.map((item: any) => {
            return item.name === shopData ? (
              <SubPanel name={item.name} src={item.src} />
            ) : null;
          })}
      </div>
    </div>
  );
}

export default SidePanel;
