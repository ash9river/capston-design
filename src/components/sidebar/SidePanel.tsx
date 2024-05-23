import { useRecoilValue } from 'recoil';
import { sidebarIsOpenState } from 'store/atoms/sideBarIsOpenState';
import { markerDataState } from 'store/atoms/markerDataState';
import { shopState } from 'store/atoms/shopState';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMarkers } from 'services/getMarkers';
import SearchBar from './SearchBar';
import styles from './SidePanel.module.scss';
import Loader from './Loader';
import SubPanel from './SubPanel';

function SidePanel() {
  const isOpen = useRecoilValue(sidebarIsOpenState);
  const markerData = useRecoilValue(markerDataState);
  const shopData = useRecoilValue(shopState);
  const { data: markers } = useQuery({
    queryKey: ['marker'],
    queryFn: getMarkers,
  });

  return (
    <div className={styles['panel-container']}>
      <SearchBar />
      <div className={styles['iframe-container']}>
        {markers &&
          markers.map((item) => {
            return item.name === shopData ? (
              <SubPanel id={item.id} name={item.name} src={item.mapUrl} />
            ) : null;
          })}
      </div>
    </div>
  );
}

export default SidePanel;
