import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Fuse from 'fuse.js';
import { useSetRecoilState } from 'recoil'

import Layout from '../../shared/theme/Layout/Layout'
import { onGetPhotoGroup } from '../../shared/api/photo'
import { albumAtom } from '../../shared/store/storeAlbum'

const Album = () => {
  const [album, setAlbum] = useState([])
  const [initAlbum, setInitAlbum] = useState([])
  const [search, setSearch] = useState('')
  const setAlbumAtom = useSetRecoilState(albumAtom)

  const history = useHistory()

  useEffect(() => {
    (async () => {
      const data = await onGetPhotoGroup()
      console.log('data', data)
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
    console.log('data', data)
    setAlbumAtom(data)
    history.push(`/album/${data.albumId}`)
  }

  return (
    <Layout search={search} onChange={onChangeSearch}>
      {album.map(item => (
        <div>
          <h1>{`Album ${item.albumId}`}</h1>
          <div className='grid grid-cols-6 gap-2'>
            {item.photos.slice(0, 11).map(i => (
              <img src={i.thumbnailUrl} alt='img' className='rounded-lg' />
            ))}
            <div className='w-full h-full border rounded-lg' onClick={() => onClickMore(item)}>{item.photos.length - 11}</div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Album