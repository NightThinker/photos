import { useEffect, useState } from 'react'

import Layout from '../../shared/theme/Layout/Layout'
import { onGetPhoto } from '../../shared/api/photo'

const Photo = () => {
  const [photos, setPhotos] = useState([])
  const [limit, setLimit] = useState(12)

  useEffect(() => {
    (async () => {
      const { data } = await onGetPhoto(limit)
      console.log('data', data)
      setPhotos(data)
    })()
  }, [])

  const truncateString = str => {
    if (str.length > 24) {
      let subStr = str.substring(0, 24);
      return subStr + "...";
    } else {
      return str;
    }
  }

  const onClickMore = async () => {
    setLimit(limit + 12)
    const { data } = await onGetPhoto(limit + 12)
    console.log('data', data)
    setPhotos(data)
  }

  return (
    <Layout>
      <div className='grid grid-cols-4 gap-3'>
        {photos.map(({ id, thumbnailUrl, title }) => (
          <div key={id} className='shadow-md rounded-lg'>
            <img src={thumbnailUrl} alt='img' className='w-full h-48 rounded-t-lg' />
            <p className='p-3'>{truncateString(title)}</p>
          </div>
        ))}
        <button onClick={() => onClickMore()}>more</button>
      </div>
    </Layout>
  )
}

export default Photo