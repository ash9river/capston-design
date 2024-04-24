import { useCallback, useRef, useState } from 'react';
import styles from './MapMarker.module.scss';
import MapPin from './MapPin';

function MapMarker({ map }: { map: google.maps.Map }) {
  if (map === undefined) return <>error</>;
  const ref = useRef<HTMLElement>();
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement>();

  const markerRef = useCallback<React.RefCallback<HTMLElement>>(
    (node: HTMLDivElement) => {
      if (!ref) {
        if (marker) {
          marker.map = null;
        }
      }
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
      }
      ref.current = node;
    },
    [],
  );

  return (
    <div className={styles.marker}>
      {ref !== undefined ? <MapPin ref={markerRef}>마커</MapPin> : null}
    </div>
  );
}

export default MapMarker;
