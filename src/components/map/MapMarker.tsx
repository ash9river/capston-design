import { useEffect, useRef, useState } from 'react';
import styles from './MapMarker.module.scss';

function MapMarker({ map }: { map: google.maps.Map }) {
  if (map === undefined) return <>error</>;
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement>();
  useEffect(() => {
    if (ref.current) {
      const initMarker = new google.maps.marker.AdvancedMarkerElement({
        position: {
          lat: 37.549186395087,
          lng: 127.07505567644,
        },
        map,
        title: '마커',
        content: ref.current,
      });
    }
  }, []);

  return (
    <div ref={ref} id="marker" className={styles['map-marker']}>
      {innerRef.current !== null ? (
        <div ref={innerRef} className={styles['map-maker-inner']} />
      ) : null}
    </div>
  );
}

export default MapMarker;
