import { useEffect, useRef, useState } from 'react';
import styles from './MapMarker.module.scss';
import MapPin from './MapPin';

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
        title: '이건 마커다 마커마커',
        content: ref.current, // PinElement
        // ref.current를 조정함으로써 마커의 커스텀이 가능해질수도?
      });

      setMarker(initMarker);
      return () => {
        initMarker.map = null;
      };
    }
  }, [ref]);

  return (
    <div /* ref={ref} */ className={styles.marker}>
      {/* MapPin 컴포넌트로 대체 */}
      <MapPin ref={ref}>마커</MapPin>
    </div>
  );
  /* return (
    <div ref={ref} id="marker">
      {innerRef !== null ? (
        <div ref={innerRef} className={styles['map-marker-inner']}>
          마커
        </div>
      ) : null}
    </div>
  ); */
}

export default MapMarker;
