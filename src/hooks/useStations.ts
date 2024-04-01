/* import { useQuery, QueryFunction } from '@tanstack/react-query';
import { getDisplayPosition } from 'services/getDisplayPosition';

export type Stations = {
  stationId: number;
  stationName: string;
  latitude: number;
  longitude: number;
};

export const fetchStations = async (map: google.maps.Map) => {
  const { longitude, latitude, longitudeDelta, latitudeDelta } =
    getDisplayPosition(map);

  const stations = await fetch(
    `/stations?latitude=${latitude}&longitude=${longitude}&latitudeDelta=${latitudeDelta}&longitudeDelta=${longitudeDelta}`,
  ).then<Stations[]>(async (response) => {
    const data = await response.json();
    return data;
  });

  return stations;
};

export const useStatios = () => {
  return useQuery({
    queryKey: ['stations'],
    queryFn: fetchStations,
    refetchOnWindowFocus: false,
  });
};
 */

export default function asd() {
  console.log('asd');
}
