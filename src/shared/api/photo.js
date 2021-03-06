import axios from 'axios'
// import groupBy from 'lodash/groupBy'
import _ from 'lodash'

export const onGetPhoto = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/photos`)
}


export const onGetPhotoGroup = async () => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    const group = _.chain(data)
      .groupBy('albumId')
      .map((value, key) => ({ albumId: key, photos: value }))
      .value();
    return group
  } catch (error) {
    return error
  }

}