import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Fuse from 'fuse.js';
import { useSetRecoilState } from 'recoil'
import Skeleton from "react-loading-skeleton";

import Layout from '../../shared/theme/Layout/Layout'
import { onGetPhotoGroup } from '../../shared/api/photo'
import { albumAtom } from '../../shared/store/storeAlbum'
import Text from '../../shared/components/Text/Text'

const Album = () => {
  const [album, setAlbum] = useState([])
  const [initAlbum, setInitAlbum] = useState([])
  const [search, setSearch] = useState('')
  const setAlbumAtom = useSetRecoilState(albumAtom)

  const history = useHistory()

  useEffect(() => {
    (async () => {
      const data = await onGetPhotoGroup()
      setAlbum(data)
      setInitAlbum(data)
    })()
  }, [])

  const fuse = new Fuse(album, {
    keys: ['albumId']
  })

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      setAlbum(initAlbum)
      return;
    }
    const results = fuse.search(e.target.value);
    setAlbum(results.map(i => i.item));
  }

  const onClickMore = (data) => {
    setAlbumAtom(data)
    history.push(`/album/${data.albumId}`)
  }

  return (
    <Layout search={search} onChange={onChangeSearch}>
      {album.length ? (
        <div className='flex flex-col gap-12'>
          {album.map(item => (
            <div>
              <Text size='text-xl'>{`Album ${item.albumId}`}</Text>
              <div className='grid grid-cols-6 gap-2 mt-4'>
                {item.photos.slice(0, 11).map(i => (
                  <img src={i.thumbnailUrl} alt='img' className='rounded-lg' />
                ))}
                <div className='w-full h-full border rounded-lg flex justify-center items-center bg-gray-50 cursor-pointer' onClick={() => onClickMore(item)}>
                  <Text size='text-4xl' color='text-gray-400'>

                    {`+ ${item.photos.length - 11}`}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : <Skeleton count={3} />}

    </Layout>
  )
}

export default Album