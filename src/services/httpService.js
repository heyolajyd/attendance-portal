import axios from 'axios';
import {
  HTTP_400_BAD_REQUEST,
  HTTP_500_INTERNAL_SERVER_ERROR,
  HTTP_401_UNAUTHORIZED,
} from 'constants/statusCodes';
import { userService } from './userService';
import { getToken } from './storageService';

// `baseUrl` will be prepended to `url` unless `url` is absolute
axios.defaults.baseURL = process.env.REACT_APP_API;

export const getHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };
};

// When we want to handle response and error differently
axios.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (error) => {
    const { response = {}, request, message, config } = error;

    // The request was made and the server responsed with a status code
    if (
      response.status >= HTTP_400_BAD_REQUEST ||
      response.status === HTTP_500_INTERNAL_SERVER_ERROR
    ) {
      // Auto logout user if response is 401
      if (response.status === HTTP_401_UNAUTHORIZED) {
        userService.logout();
        window.location.reload(true);
      }

      return Promise.reject(response.data);
    } else if (request) {
      // The request was made but no response was received
      console.log('Request Error: ', request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error: ', message);
    }

    // Configuration error
    console.log('Config Error:', config);
  }
);

const httpMethods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default httpMethods;
