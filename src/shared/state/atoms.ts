import { atom } from 'recoil';
import {InfoAtom} from './type';

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false
});

export const infoState = atom<InfoAtom>({
  key: 'infoState',
  default: {
    error: false,
    data: null,
    loading: false
  },
});

