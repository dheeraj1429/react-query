import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useDataFetching } from '../Hooks/useDataFeatching';
import { request } from '../axios.utili';

function Post() {
   const queryClient = useQueryClient();

   const onSuccess = () => {
      console.log('data is fetched');
   };

   const onError = () => {
      console.log('something error.');
   };

   const { data, isLoading, error, isError, isFetching, refetch } = useDataFetching(onSuccess, onError);

   const postDataFn = function (data) {
      return request({ method: 'POST', url: '/posts', data: data });
   };

   const {
      mutate,
      isLoading: postLoading,
      error: postError,
      isError: postIsError,
      data: postData,
   } = useMutation(postDataFn, {
      onSuccess: (data) => {
         queryClient.setQueryData('posts', (oldData) => {
            return {
               ...oldData,
               data: [...oldData.data, data.data],
            };
         });
      },
   });

   const SendHandler = function () {
      mutate({
         id: 101,
         title: 'foo',
         body: 'bar',
         userId: 1,
      });
   };

   console.log(postLoading, postError, postIsError, postData);

   return (
      <div>
         <div className="p-2">
            <button onClick={SendHandler}>Send data to the backend</button>
            {postError ? <p>{postError.message}</p> : null}
            {postLoading ? <p>Loading...</p> : null}
            {data?.data ? (
               data?.data.map((el) => (
                  <div className="p-3 shadow mb-4 rounded-lg">
                     <p>{el.id}</p>
                     <p>{el.title}</p>
                     <p>{el.body}</p>
                  </div>
               ))
            ) : (
               <button onClick={refetch}>Fetch</button>
            )}
         </div>
      </div>
   );
}

export default Post;
