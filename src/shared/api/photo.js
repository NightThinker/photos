import axios from 'axios'

export const onGetPhoto = (limt) => {
  return axios.get(`https://jsonplaceholder.typicode.com/photos`, {
    params: {
      _limit: limt
    }
  })
}