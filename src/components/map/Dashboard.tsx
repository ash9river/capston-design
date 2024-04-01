import styles from './Dashboard.module.scss';

const stations = [
  {
    stationId: 'test_station0',
    stationName: 'test_station0',
    latitude: 0,
    longitude: 0,
  },
  {
    stationId: 'test_station1',
    stationName: 'test_station1',
    latitude: 1,
    longitude: 1,
  },
];
function Dashboard() {
  /*   const { data: stations, isLoading, isError } = useStatios();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  } */

  return (
    <div className={styles.dashboard}>
      <ul>
        {stations?.map((station) => (
          <li key={station.stationId}>{station.stationName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
