import { selector } from 'recoil';
import { infoState, loadingState } from './atoms';
import {InfoAtom} from './type';

export const loadingSelector = selector({
  key: 'loadingSelector',
  get: ({ get }) => {
    return get<boolean>(loadingState);
  },
});

export const infoSelector = selector({
  key: 'infoSelector',
  get: ({ get }) => {
    return get<InfoAtom>(infoState);
  },
});

