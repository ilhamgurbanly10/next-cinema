import { atom } from 'recoil';
import {InfoAtom, TopCategories, WeeklyBestRecipes, Hero} from './type';

export const sloganState = atom<string>({
  key: 'sloganState',
  default: 'hi slogan'
});

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

export const topCategoriesState = atom<TopCategories>({
  key: 'topCategoriesState',
  default: {
    error: false,
    data: [],
    loading: false
  },
});

export const weeklyBestRecipesState = atom<WeeklyBestRecipes>({
  key: 'weeklyBestRecipesState',
  default: {
    error: false,
    data: [],
    loading: false
  },
});

export const heroState = atom<Hero>({
  key: 'heroState',
  default: {
    error: false,
    data: [],
    loading: false
  },
});
