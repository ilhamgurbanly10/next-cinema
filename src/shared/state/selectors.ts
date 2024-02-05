import { selector } from 'recoil';
import { infoState } from './atoms';
import {InfoAtom} from './type';

export const infoSelector = selector({
  key: 'infoSelector',
  get: ({ get }) => {
    return get<InfoAtom>(infoState);
  },
});

