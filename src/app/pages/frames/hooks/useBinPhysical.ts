import { formCardFieldNames } from 'app/pages/frames/components/Form/FormCard/constants';
import { getBinFromCardNumber } from 'app/util/constants';
import { binPhysicalProducts } from 'common/constants';
import { FormApi } from 'final-form';
import { useState } from 'react';

export const useBinPhysical = () => {
  const [binPhysicalProduct, setBinPhysicalProduct] = useState<boolean>(false);

  const validateBinPhysicalProduct = (form: FormApi<any>): void => {
    const { getFieldState } = form;
    const { value = '' } = getFieldState(formCardFieldNames.cardNumber)!;
    const bin = getBinFromCardNumber(value);

    setBinPhysicalProduct(binPhysicalProducts.includes(bin));
  };

  return {
    binPhysicalProduct,
    validateBinPhysicalProduct,
  };
};
