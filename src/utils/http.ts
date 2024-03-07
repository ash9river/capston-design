import axios from 'axios';
import { json } from 'react-router-dom';

export async function getData(params: string) {
  try {
    const response = await axios.get(`htttp://localhost:8080/${params}`);

    const resData = await (response as any).json();

    return resData;
  } catch (err) {
    throw json(
      {
        message: 'Failed to Fetch data.',
      },
      {
        status: 500,
      },
    );
  }
}
