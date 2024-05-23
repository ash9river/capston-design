import { getData } from './getData';

export type MarkerType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  mapUrl: string;
};

export async function getMarkers({ signal }: { signal?: AbortSignal }) {
  try {
    const response = await getData<MarkerType[]>('stores', signal);
    return response;
  } catch (err: any) {
    if (err.response) {
      const error: any = new Error(
        'An error occurred while creating the event',
      );
      error.code = err.response.status;
      error.info = err.response.data;
      throw error;
    } else {
      throw new Error('An error occurred while fetching the events');
    }
  }
}
