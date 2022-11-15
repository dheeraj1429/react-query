import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchFunction = function ({ queryKey }) {
   const key = queryKey[1];
   return axios.get(`https://jsonplaceholder.typicode.com/posts/${key}`);
};

function SinglePost() {
   const params = useParams();

   const { id } = params;

   const { isLoading, error, isFetching, data } = useQuery(['post', id], fetchFunction);

   if (isLoading || isFetching) {
      return <h1>Loading...</h1>;
   }

   if (error) {
      return <h1>{error.message}</h1>;
   }

   return (
      <div>
         {!!data ? (
            <>
               <h1>{data.data.title}</h1>
               <p>{data.data.body}</p>
               <p>{data.data.id}</p>
            </>
         ) : null}
      </div>
   );
}

export default SinglePost;
