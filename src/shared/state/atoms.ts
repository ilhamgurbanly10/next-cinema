import { atom } from 'recoil';
import {HeroAtom} from './type';

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

