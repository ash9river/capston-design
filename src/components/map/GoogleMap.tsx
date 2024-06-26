/* eslint-disable react/button-has-type */
import React, { useCallback, useState } from 'react';
import styles from './GoogleMap.module.scss';
import MapMarker from './MapMarker';

function GoogleMap() {
  const [googleMap, setGoogleMap] = useState<google.maps.Map>();

  const mapRef = useCallback<React.RefCallback<HTMLDivElement>>(
    (node: HTMLDivElement) => {
      if (node) {
        const initialMap = new window.google.maps.Map(node, {
          center: {
            lat: 37.549186395087,
            lng: 127.07505567644,
          },
          zoom: 16,
          mapId: process.env.REACT_APP_GOOGLE_VECTOR_MAP_KEY as string,
          /* disableDefaultUI: true,
          clickableIcons: false, */
          minZoom: 12,
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
    },
    [],
  );

  return (
    <div ref={mapRef} id="map" className={styles['google-map']}>
      {googleMap !== undefined && <MapMarker map={googleMap} />}
    </div>
  );
}

export default GoogleMap;
