import { useState} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return {
    showMenu,
    setShowMenu
  };

};

export default useModel;

