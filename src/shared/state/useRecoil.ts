import {Hook, HeroAtom, OurMasterChefsAtom} from './type'
import { useRecoilState } from 'recoil';
import { heroState, ourMasterChefsState } from './atoms';
;

const useRecoil = (): Hook => {

  // atoms
  const [hero, setHero] = useRecoilState<HeroAtom>(heroState);
  const [ourMasterChefs, setourMasterChefs] = useRecoilState<OurMasterChefsAtom>(ourMasterChefsState);
  return { hero, ourMasterChefs};

};

export default useRecoil;
