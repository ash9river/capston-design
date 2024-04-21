import { useEffect, useState } from 'react';

type locationType = {
  latitude: number;
  longitude: number;
};

function getLocation() {
  const [location, setLocation] = useState<locationType>({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        return setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, []);

  return location;
}

export default getLocation;
