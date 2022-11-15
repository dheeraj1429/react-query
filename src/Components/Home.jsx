import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useDataFetching } from '../Hooks/useDataFeatching';
import { Link } from 'react-router-dom';

function Home() {
   const onSuccess = () => {
      console.log('data is fetched');
   };

   const onError = () => {
      console.log('something error.');
   };

   const { data, isLoading, error, isError, isFetching, refetch } = useDataFetching(onSuccess, onError);

   if (isLoading) {
      return <h1>Loading...</h1>;
   }

   if (isError) {
      return <h1>{error.message}</h1>;
   }

   return (
      <div className="p-2">
         {data?.data ? (
            data?.data.map((el) => (
               <Link to={`/post/${el.id}`}>
                  <div className="p-3 shadow mb-4 rounded-lg">
                     <p>{el.id}</p>
                     <p>{el.title}</p>
                     <p>{el.body}</p>
                  </div>
               </Link>
            ))
         ) : (
            <button onClick={refetch}>Fetch</button>
         )}
      </div>
   );
}

export default Home;
