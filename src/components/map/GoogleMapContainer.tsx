import { Status, Wrapper } from '@googlemaps/react-wrapper';
import GoogleMap from './GoogleMap';
import styles from './GoogleMap.module.scss';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div className={styles['google-map']}>로딩중...</div>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <GoogleMap />;
    default:
      return <>에러발생</>;
  }
};

function GoogleMapContainer() {
  return (
    <Wrapper
      apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY as string}
      render={render}
      libraries={['marker']}
    />
  );
}

export default GoogleMapContainer;
