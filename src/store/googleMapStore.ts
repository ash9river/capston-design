import { store } from 'external-state';

export const INITIAL_CENTER = {
  lat: 37.5,
  lng: 127.0,
};

export const INITIAL_ZOOM_LEVEL = 16;

/* export const googleMapStore = () => {
  const container = document.createElement('div');

  container.id = 'map';
  container.style.minHeight = '50vh';

  document.body.appendChild(container);

  const googleMap: google.maps.Map = new window.google.maps.Map(container, {
    center: INITIAL_CENTER,
    zoom: INITIAL_ZOOM_LEVEL,
    disableDefaultUI: true,
    mapId: process.env.REACT_APP_GOOGLE_MAP_KEY as string,
  });

  return store<google.maps.Map>(googleMap);
};
 */
/* export const getGoogleMapStore = (() => {
  let googleMap: google.maps.Map;

  const container = document.createElement('div');

  container.id = 'map';
  container.style.minHeight = '50vh';

  document.body.appendChild(container);

  return () => {
    if (!googleMap) {
      googleMap = new window.google.maps.Map(container, {
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM_LEVEL,
        disableDefaultUI: true,
        mapId: process.env.REACT_APP_GOOGLE_MAP_KEY as string,
      });
    }

    return store<google.maps.Map>(googleMap);
  };
})(); */
