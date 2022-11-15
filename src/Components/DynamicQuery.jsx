import axios from 'axios';
import React from 'react';
import { useQueries } from 'react-query';

const queryId = [1, 3];

const fetchFunction = function (id) {
   return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

function DynamicQuery() {
   const queryResults = useQueries(
      queryId.map((el) => {
         return {
            queryKey: ['posts', el],
            queryFn: () => fetchFunction(el),
         };
      })
   );

   console.log(queryResults);

   return <div>DynamicQuery</div>;
}

export default DynamicQuery;
