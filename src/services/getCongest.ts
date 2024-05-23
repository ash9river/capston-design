import { getData } from './getData';

export type CongestType = {
  id: number;
  latitude: number;
  longitude: number;
  congest: number;
};

export async function getCongest({
  signal,
  id,
}: {
  signal?: AbortSignal;
  id: number;
}) {
  try {
    const response = await getData<CongestType>(`congest/${id}`, signal);
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
