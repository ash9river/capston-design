import { http, HttpResponse } from 'msw';

const markers: any = [
  {
    id: 1,
    name: '포옹남 성수송정점',
    latitude: 37.548341,
    longitude: 127.064828,
    mapUrl:
      'https://pcmap.place.naver.com/place/1982400005?from=map&fromPanelNum=1&timestamp=202405161456',
  },
  {
    id: 2,
    name: '세종대',
    latitude: 37.549186395087,
    longitude: 127.07505567644,
    mapUrl:
      'https://pcmap.place.naver.com/place/11591591?entry=bmp&from=map&fromPanelNum=2&timestamp=202405161558',
  },
];

export const handlers = [
  http.get('/stations', async ({ request }) => {
    const url = new URL(request.url);

    const latitude = url.searchParams.get('latitude');
    const longitude = url.searchParams.get('longitude');

    const latitudeDelta = url.searchParams.get('latitudeDelta');
    const longitudeDelta = url.searchParams.get('longitudeDelta');

    const northEastBoundary = {
      latitude: Number(latitude) + Number(latitudeDelta),
      longitude: Number(longitude) + Number(longitudeDelta),
    };

    const southWestBoundary = {
      latitude: Number(latitude) - Number(longitudeDelta),
      longitude: Number(longitude) - Number(longitudeDelta),
    };
    console.log(
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
      northEastBoundary,
      southWestBoundary,
    );

    return HttpResponse.json([
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
    ]);
  }),

  http.get('/stores', async () => {
    return HttpResponse.json(markers);
  }),

  http.get('/congest/:id', async ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id,
      latitude: 1,
      longitude: 1,
      congest: 25,
    });
  }),
];
