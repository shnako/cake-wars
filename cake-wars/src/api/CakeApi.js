import axios from 'axios';
import {cakesEndpoint} from './Endpoints';

class CakeApi {
  static getCakes() {
    return new Promise((resolve, reject) => {
      axios.get(cakesEndpoint)
        .then(response => {
          resolve(response.data);
        })
        .catch(errorResponse => {
          console.log(errorResponse.response);
          reject(errorResponse.response);
        })
    });
  }

  static getCake(cakeId) {
    return new Promise((resolve, reject) => {
      axios.get(cakesEndpoint + '/' + cakeId)
        .then(response => {
          resolve(response.data);
        })
        .catch(errorResponse => {
          console.log(errorResponse.response);
          reject(errorResponse.response);
        })
    });
  }
}

export default CakeApi;