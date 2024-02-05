import {Hook, InfoAtom} from './type'
import { useRecoilState } from 'recoil';
import { infoState } from './atoms';
;

const useRecoil = (): Hook => {

  // atoms
  const [info, setInfo] = useRecoilState<InfoAtom>(infoState);
  return { info };

};

export default useRecoil;
