import { useEffect, useState} from 'react';
import { ModelReturnProps } from './type';
import { useWindow } from '@/shared/hooks';

const useModel = (count: number | string, speed: number, addedCount: number, index: number): ModelReturnProps  => {

  const [quantity, setQuantity] = useState<number | string>(0);
  const { isElementInViewport } = useWindow();

  const add = (): void => {
    const timeout = setTimeout(() => {
      const nextCount = Number(quantity) + addedCount;
      if (nextCount < Number(count)) {
        setQuantity(Number(quantity) + addedCount);
      } else if (Number(quantity) < Number(count)) {
        setQuantity(Number(count));
      } else {
        clearTimeout(timeout);
      }
     
    }, speed);
  }

  useEffect(() => {
    add();
  }, [quantity]);
  return {
   quantity
  };

};

export default useModel;

