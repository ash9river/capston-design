import { useEffect, useRef, useState } from 'react';
import styles from './GoogleMap.module.scss';
import MapMarker from './MapMarker';
// 상태분리설계 뭐로하지

function GoogleMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [googleMap, setGoogleMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: {
          lat: 37.549186395087,
          lng: 127.07505567644,
        },
        zoom: 16,
        mapId: process.env.REACT_APP_GOOGLE_VECTOR_MAP_KEY as string,
        disableDefaultUI: true,
        clickableIcons: false,
        minZoom: 10,
        maxZoom: 18,
        gestureHandling: 'greedy',
        restriction: {
          latLngBounds: {
            north: 39,
            south: 32,
            east: 132,
            west: 124,
          },
          strictBounds: true,
        },
      });

      setGoogleMap(initialMap);
    }
  }, []);

  return (
    <div ref={ref} id="map" className={styles['google-map']}>
      {googleMap !== undefined ? <MapMarker map={googleMap} /> : null}
    </div>
  );
}

export default GoogleMap;
