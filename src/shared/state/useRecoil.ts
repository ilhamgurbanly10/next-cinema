import {Hook, HeroAtom} from './type'
import { useRecoilState } from 'recoil';
import { heroState } from './atoms';
;

const useRecoil = (): Hook => {

  // atoms
  const [hero, setHero] = useRecoilState<HeroAtom>(heroState);
  return { hero };

};

export default useRecoil;
