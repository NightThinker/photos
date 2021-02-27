import { useRecoilValue } from 'recoil'
import Skeleton from "react-loading-skeleton";
import truncate from 'lodash/truncate'


import { albumAtom } from '../../shared/store/storeAlbum'

const AlbumById = () => {
  const album = useRecoilValue(albumAtom)
  return (
    <div>
      {!!album.albumId ?
        <div className='p-10'>
          <h1 className='text-4xl text-center'>{`Album ${album.albumId}`}</h1>
          <div className='grid grid-cols-4 gap-3 mt-9'>
            {album.photos.map(({ id, thumbnailUrl, title }) => (
              <div key={id} className='shadow-md rounded-lg'>
                <img src={thumbnailUrl} alt='img' className='w-full h-48 rounded-t-lg' />
                <p className='p-3'>{truncate(title, {
                  'length': 24,
                  'separator': '...'
                })}</p>
              </div>
            ))}
          </div>
        </div>
        : <Skeleton />}

    </div>
  )
}

export default AlbumById