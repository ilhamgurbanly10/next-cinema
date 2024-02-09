import { atom } from 'recoil';
import {HeroAtom, OurMasterChefsAtom} from './type';

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

