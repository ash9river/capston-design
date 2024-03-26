import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// type Inference

function exampleOne() {
  const { data } = useQuery({
    //    ^? const data: number | undefined
    queryKey: ['test'],
    queryFn: () => Promise.resolve(5),
  });
}

function exampleTwo() {
  const { data } = useQuery({
    //      ^? const data: string | undefined
    queryKey: ['test'],
    // queryFn: () => Promise.resolve(5),
    select: (data: string) => data.toString(),
  });
}

function exampleThree() {
  const fetchGroups = (): Promise<any> =>
    axios.get<any>('/groups').then((response) => response.data);

  const { data } = useQuery({ queryKey: ['groups'], queryFn: fetchGroups });
  //      ^? const data: Group[] | undefined
}

// Type Narrowing

function exampleFour() {
  const { data, isSuccess } = useQuery({
    queryKey: ['test'],
    queryFn: () => Promise.resolve(5),
  });

  if (isSuccess) {
    // data;
    //  ^? const data: number
  }
}

// Typing the error field

function exampleFive() {
  const { error } = useQuery({ queryKey: ['groups'], queryFn: () => '' });
  //      ^? const error: Error
}
