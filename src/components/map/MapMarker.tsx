import { useCallback, useEffect, useRef } from 'react';
import styles from './MapMarker.module.scss';
import MapPin from './MapPin';

function MapMarker({ map }: { map: google.maps.Map }) {
  const ref = useRef<google.maps.marker.AdvancedMarkerElement>();
  const markerRef = useCallback<React.RefCallback<HTMLElement>>(
    (node: HTMLDivElement) => {
      if (node) {
        const initMarker = new google.maps.marker.AdvancedMarkerElement({
          position: {
            lat: 37.549186395087,
            lng: 127.07505567644,
          },
          map,
          title: '이건 마커다 마커마커',
          content: node, // PinElement
          // ref.current를 조정함으로써 마커의 커스텀이 가능해질수도?
        });

        ref.current = initMarker;
      }
    },
    [],
  );

  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.map = null;
      }
    };
  }, []);

  return (
    <div className={styles.marker}>
      <MapPin ref={markerRef}>마커</MapPin>
    </div>
  );
}

export default MapMarker;
