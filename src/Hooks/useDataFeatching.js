import axios from 'axios';
import { useQuery } from 'react-query';

export const useDataFetching = (onSuccess, onError) => {
   return useQuery(
      'posts',
      () => {
         return axios.get(`https://jsonplaceholder.typicode.com/posts`);
      },
      {
         cacheTime: 20000, // cache data
         staleTime: 0, // fetching data time
         refetchOnMount: true, // fetch data on mount
         // refetchInterval: 2000, // polling.
         enabled: false, // when action handler creating.
         onSuccess,
         onError,
      }
   );
};
