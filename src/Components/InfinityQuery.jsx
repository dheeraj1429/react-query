import axios from 'axios';
import React from 'react';
import { useInfiniteQuery } from 'react-query';

const fetchFunction = function ({ pageParam = 1 }) {
   return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${pageParam}`);
};

function InfinityQuery() {
   const { isLoading, error, data, isFetching, hasNextPage } = useInfiniteQuery('posts-data', fetchFunction, {
      getNextPageParam: (_lastPage, pages) => {
         if (pages.length < 4) {
            return pages.length + 1;
         } else {
            return undefined;
         }
      },
   });

   console.log(isLoading, error, data, isFetching, hasNextPage);

   return (
      <div>
         <button disabled={!hasNextPage} className="p-2 bg-red-800 rounded-lg text-white" onClick={hasNextPage}>
            Next
         </button>
      </div>
   );
}

export default InfinityQuery;
