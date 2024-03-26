import React, { useCallback, useEffect, useRef, useState } from 'react';

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '400px',
  margin: 'auto',
};

const center: google.maps.LatLngLiteral = {
  lat: 37.549,
  lng: 127.075,
};

const options: google.maps.MapOptions = {
  zoom: 16,
};

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // google maps 에서 받은 api key를 전달한다..
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY as string,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    console.log('use map instance', map);
    map.setCenter(center);
    map.setOptions(options);
    map.setHeading(90);
  }, []);

  const onUnmount = useCallback((map: google.maps.Map) => {
    console.log('do your stuff before map is unmounted', map);
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GoogleMap
        id="google-map-test"
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF position={center} title="내 마커" draggable />
      </GoogleMap>
    </div>
  );
}

export default React.memo(MyMap);
