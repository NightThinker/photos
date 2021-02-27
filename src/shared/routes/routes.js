import { lazy } from 'react'

const Album = lazy(() => import('../../feature/album/Album'));
const AlbumById = lazy(() => import('../../feature/album/AlbumById'));
const Photo = lazy(() => import('../../feature/photo/Photo'));


export const routes = [
  { path: '/', component: Photo },
  { path: '/photo', component: Photo },
  { path: '/album', component: Album },
  { path: '/album/:id', component: AlbumById }
]