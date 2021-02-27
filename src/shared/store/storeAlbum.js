import { atom } from 'recoil';

export const albumAtom = atom({
  key: 'album',
  default: {
    albumId: '',
    photos: []
  }
});