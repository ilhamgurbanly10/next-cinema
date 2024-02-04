import {Hook, InfoAtom, TopCategories, WeeklyBestRecipes, Hero} from './type'
import { useRecoilState } from 'recoil';
import { infoState, topCategoriesState, weeklyBestRecipesState, heroState } from './atoms';
;

const useRecoil = (): Hook => {

  // atoms
  const [info, setInfo] = useRecoilState<InfoAtom>(infoState);
  const [topCategories, setTopCategories] = useRecoilState<TopCategories>(topCategoriesState);
  const [weeklyBestRecipes, setWeeklyBestRecipes] = useRecoilState<WeeklyBestRecipes>(weeklyBestRecipesState);
  const [hero, setHero] = useRecoilState<Hero>(heroState);

  return { info, topCategories, weeklyBestRecipes, hero };

};

export default useRecoil;
