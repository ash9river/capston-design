import { useRef, useEffect, useState } from 'react';

import getLocation from 'hooks/getLocation';
import { Marker, useNavermaps, NaverMap } from 'react-naver-maps';
import styles from './NaverMap.module.scss';

function NaverMapContent() {
  // const location = getLocation();
  const location: { latitude: number; longitude: number } = {
    latitude: 37.549186395087,
    longitude: 127.07505567644,
  };
  const navermaps = useNavermaps();
  const [map, setMap] = useState<naver.maps.Map>();

  useEffect(() => {
    console.log(location);
  }, [location]);

  function handleClick(title: string) {
    if (title === '포옹남') {
      //
    } else {
      //
    }
  }

  return (
    <NaverMap
      defaultCenter={
        new navermaps.LatLng(location.latitude, location.longitude)
      }
      defaultZoom={15}
    >
      <Marker
        defaultPosition={
          new navermaps.LatLng(location.latitude, location.longitude)
        }
      />
    </NaverMap>
  );
}

export default NaverMapContent;
