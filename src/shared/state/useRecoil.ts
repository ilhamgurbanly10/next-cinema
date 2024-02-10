import {Hook, HeroAtom, OurMasterChefsAtom, FromOurBlogAtom} from './type'
import { useRecoilState } from 'recoil';
import { heroState, ourMasterChefsState, fromOurBlogState } from './atoms';
;

const useRecoil = (): Hook => {

  // atoms
  const [hero, setHero] = useRecoilState<HeroAtom>(heroState);
  const [ourMasterChefs, setourMasterChefs] = useRecoilState<OurMasterChefsAtom>(ourMasterChefsState);
  const [fromOurBlog, setFromOurBlog] = useRecoilState<FromOurBlogAtom>(fromOurBlogState);
  return { hero, ourMasterChefs, fromOurBlog};

};

export default useRecoil;
