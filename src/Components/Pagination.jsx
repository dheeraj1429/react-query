import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchFunction = function (Api) {
   return axios.get(Api);
};

function Pagination() {
   const [Page, setPage] = useState(1);
   const API = `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${Page}`;

   const { isLoading, data, error, isFetching } = useQuery(['posts', Page], () => fetchFunction(API), {
      keepPreviousData: true,
   });

   if (error) {
      return <h1>{error.message}</h1>;
   }

   return (
      <div>
         {data?.data
            ? data?.data.map((el) => (
                 <>
                    <h5>{el.title}</h5>
                    <p>{el.body}</p>
                    <p>{el.id}</p>
                 </>
              ))
            : null}
         <button className="p-2 bg-red-800 rounded-lg text-white" onClick={() => setPage((prevState) => prevState + 1)}>
            Next
         </button>
         <button className="p-2 bg-red-800 rounded-lg mx-3 text-white" onClick={() => setPage((prevState) => prevState - 1)}>
            previwe
         </button>
         {isFetching || isLoading ? <h5>Loading...</h5> : null}
      </div>
   );
}

export default Pagination;
