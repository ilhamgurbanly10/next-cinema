import { atom } from 'recoil';
import {HeroAtom, OurMasterChefsAtom, FromOurBlogAtom} from './type';

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false
});

export const heroState = atom<HeroAtom>({
  key: 'heroState',
  default: {
    error: false,
    data: null,
    loading: false
  },
});

export const ourMasterChefsState = atom<OurMasterChefsAtom>({
  key: 'ourMasterChefsState',
  default: {
    error: false,
    data: null,
    loading: false
  },
});

export const fromOurBlogState = atom<FromOurBlogAtom>({
  key: 'fromOurBlogState',
  default: {
    error: false,
    data: null,
    loading: false
  },
});

