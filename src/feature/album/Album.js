import { useEffect } from 'react'
import Layout from '../../shared/theme/Layout/Layout'

import { onGetPhotoGroup } from '../../shared/api/photo'
import logo from '../../logo.svg'

const Album = () => {
  useEffect(() => {
    (async () => {
      const data = await onGetPhotoGroup()
      console.log('data', data)
    })()
  }, [])
  return (
    <Layout>
      <div>
        <h1>Album1</h1>
        <div className='grid grid-cols-6'>
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
          <img src={logo} alt='img' />
        </div>
      </div>
    </Layout>
  )
}

export default Album