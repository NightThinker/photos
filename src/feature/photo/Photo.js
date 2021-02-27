import { useEffect, useState } from 'react'
import Fuse from 'fuse.js';
import truncate from 'lodash/truncate'
import Skeleton from "react-loading-skeleton";

import Layout from '../../shared/theme/Layout/Layout'
import { onGetPhoto } from '../../shared/api/photo'
import Text from '../../shared/components/Text/Text'

const Photo = () => {
  const [photos, setPhotos] = useState([])
  const [totalPhotos, setTotalPhotos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    (async () => {
      const { data } = await onGetPhoto()
      setPhotos(data)
      setTotalPhotos(data)
    })()
  }, [])

  const fuse = new Fuse(photos, {
    keys: ['albumId', 'title']
  })

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      setPhotos(totalPhotos)
      return;
    }
    const results = fuse.search(e.target.value);
    setPhotos(results);
  }

  return (
    <Layout search={search} onChange={onChangeSearch}>
      {photos.length ? (
        <div className='grid grid-cols-4 gap-3'>
          {photos.map(({ id, thumbnailUrl, title }) => (
            <div key={id} className='shadow-md rounded-lg'>
              <img src={thumbnailUrl} alt='img' className='w-full h-48 rounded-t-lg' />
              <Text className='p-3'>{
                truncate(title, {
                  'length': 24,
                  'separator': '...'
                })}</Text>
            </div>
          ))}
        </div>
      ) : <Skeleton count={3} />}
    </Layout>
  )
}

export default Photo