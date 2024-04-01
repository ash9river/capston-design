import { useCallback, useEffect, useRef } from 'react';
import GoogleMapContainer from 'components/map/GoogleMapContainer';
import MapHeader from 'components/UI/MapHeader';
import MyMap from '../components/map/MyMap';

const center = {
  lat: 37.549,
  lng: 127.075,
};

function MapPage() {
  /* const mapRef = useRef<HTMLDivElement>(null);

  const initMap = useCallback(() => {
    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 16,
      });

      const marker=new window.google.maps.marker(mapRef.current,{

      })
    }
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <div
      className="map"
      style={{ width: '500px', height: '500px', margin: 'auto' }}
      ref={mapRef}
    />
  ); */
  return (
    <>
      <MapHeader />
      <GoogleMapContainer />
    </>
  );
}

export default MapPage;
