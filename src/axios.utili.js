import axios from 'axios';
const client = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
export const request = ({ ...options }) => {
   client.defaults.headers.common.Authorization = `demo`;
   const onSuccess = (response) => response;
   const onError = (error) => error;

   return client(options).then(onSuccess).catch(onError);
};
