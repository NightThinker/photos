import { useRecoilValue } from 'recoil'
import Skeleton from "react-loading-skeleton";
import truncate from 'lodash/truncate'

import Text from '../../shared/components/Text/Text'
import { albumAtom } from '../../shared/store/storeAlbum'

const AlbumById = () => {
  const album = useRecoilValue(albumAtom)
  return (
    <div>
      {!!album.albumId ?
        <div className='p-10'>
          <Text size='text-4xl' className='text-center'>{`Album ${album.albumId}`}</Text>
          <div className='grid grid-cols-4 gap-3 mt-9'>
            {album.photos.map(({ id, thumbnailUrl, title }) => (
              <div key={id} className='shadow-md rounded-lg'>
                <img src={thumbnailUrl} alt='img' className='w-full h-48 rounded-t-lg' />
                <Text className='p-3'>{truncate(title, {
                  'length': 24,
                  'separator': '...'
                })}</Text>
              </div>
            ))}
          </div>
        </div>
        : <Skeleton count={3} />}

    </div>
  )
}

export default AlbumById