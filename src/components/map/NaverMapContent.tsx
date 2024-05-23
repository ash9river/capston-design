import React, { useRef, useEffect, useState, useCallback } from 'react';

import getLocation from 'hooks/getLocation';
import { Marker, useNavermaps, NaverMap, InfoWindow } from 'react-naver-maps';
import { getData } from 'services/getData';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { shopState } from 'store/atoms/shopState';
import { markerDataState } from 'store/atoms/markerDataState';
import { sidebarIsOpenState } from 'store/atoms/sideBarIsOpenState';
import { useQuery } from '@tanstack/react-query';
import { MarkerType, getMarkers } from 'services/getMarkers';
import styles from './NaverMapContent.module.scss';

interface markerType {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function NaverMapContent() {
  const { data: markers } = useQuery({
    queryKey: ['marker'],
    queryFn: getMarkers,
  });
  const [shop, setShop] = useRecoilState(shopState);

  const basicLocation: { latitude: number; longitude: number } = {
    latitude: 37.549186395087,
    longitude: 127.07505567644,
  };
  const navermaps = useNavermaps();
  const [map, setMap] = useState<any>();
  const [infowindow, setInfoWindow] = useState<any>(null);
  const [sidebar, setSidebar] = useRecoilState(sidebarIsOpenState);

  const ref = useRef<naver.maps.Marker[]>([]);
  const infowindowRef = useRef<naver.maps.InfoWindow[]>([]);

  const markerRef = useCallback<React.RefCallback<naver.maps.Marker>>(
    (node: naver.maps.Marker) => {
      if (node && ref.current) {
        ref.current.push(node);
        boolRef.current.push(false);
        const infoWindow = new naver.maps.InfoWindow({
          content: ref.current[ref.current.length - 1].getTitle(),
          borderWidth: 1,
          anchorSize: new naver.maps.Size(10, 10),
          pixelOffset: new naver.maps.Point(10, -10),
        });
        infowindowRef.current.push(infoWindow);
      }
    },
    [],
  );
  const boolRef = useRef<boolean[]>([]);

  function handleClick(item: markerType) {
    if (boolRef.current[item.id - 1]) {
      boolRef.current[item.id - 1] = false;
      infowindowRef.current[item.id - 1].close();
      setShop('');
      if (sidebar) setSidebar(false);
    } else {
      // 로직 수정해야됨
      boolRef.current.forEach((boolItem, index) => {
        if (index === item.id - 1) {
          boolRef.current[index] = true;
        } else {
          boolRef.current[index] = false;
        }
      });

      infowindowRef.current[item.id - 1].open(map, ref.current[item.id - 1]);
      setShop(item.name);
      map?.panTo(new navermaps.LatLng(item.latitude, item.longitude));
      setSidebar(true);
    }
  }

  function onSuccessGeolocation(position: any) {
    if (!map || !infowindow) return;

    const location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude,
    );
    map.setCenter(location);

    map.setZoom(16);
    infowindow.setContent(
      '<div style="padding:20px;">' +
        'geolocation.getCurrentPosition() 위치' +
        '</div>',
    );
    infowindow.open(map, location);
    console.log(`Coordinates: ${location.toString()}`);
    console.log(location);
  }

  function onErrorGeolocation() {
    if (!map || !infowindow) return;

    let center = map.getCenter();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation,
      );
    } else {
      center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
      );
      infowindow.open(map, center);
    }
  }

  useEffect(() => {
    if (!map) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation,
      );
    } else {
      const center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
      );
      infowindow.open(map, center);
    }
  }, [map, infowindow]);

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  return (
    <NaverMap
      // uncontrolled
      defaultCenter={
        new navermaps.LatLng(basicLocation.latitude, basicLocation.longitude)
      }
      defaultZoom={16}
      defaultMapTypeId={navermaps.MapTypeId.NORMAL}
      ref={setMap}
    >
      {markers &&
        markers.length > 0 &&
        markers.map((item: MarkerType, index: number) => {
          return (
            <Marker
              key={item.id}
              defaultPosition={
                new navermaps.LatLng(item.latitude, item.longitude)
              }
              title={item.name}
              onClick={() => handleClick(item)}
              ref={(node) => markerRef(node)}
              /*               icon={{
                content: `
                <button class=${styles.markerBox}>
                <div class=${styles.totalOrder}>
                ${item.id}
                </div>
                ${item.name}
                </button>`,
              }} */
            />
          );
        })}
    </NaverMap>
  );
}

export default NaverMapContent;
