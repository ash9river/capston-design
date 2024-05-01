import { useRef, useEffect, useCallback } from 'react';

import getLocation from 'hooks/getLocation';
import styles from './NaverMap.module.scss';

function NaverMap() {
  const location = getLocation();

  const ref = useRef<HTMLDivElement>(null);

  const mapRef = useCallback<React.RefCallback<HTMLDivElement>>(() => {
    if (typeof location !== 'string') {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(location.latitude, location.longitude),
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(location.latitude, location.longitude),
        map,
        // 원하는 이미지로 마커 커스텀
        // icon: {
        //     url: pinImage,
        //     size: new naver.maps.Size(50, 52),
        //     origin: new naver.maps.Point(0, 0),
        //     anchor: new naver.maps.Point(25, 26),
        //   },
      });
    }
  }, [location]);

  /*   useEffect(() => {
    if (typeof location !== 'string') {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(location.latitude, location.longitude),
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(location.latitude, location.longitude),
        map,
        // 원하는 이미지로 마커 커스텀
        // icon: {
        //     url: pinImage,
        //     size: new naver.maps.Size(50, 52),
        //     origin: new naver.maps.Point(0, 0),
        //     anchor: new naver.maps.Point(25, 26),
        //   },
      });
    }
  }, [location]); */

  return <div id="map" ref={mapRef} className={styles['map-container']} />;
}

export default NaverMap;
