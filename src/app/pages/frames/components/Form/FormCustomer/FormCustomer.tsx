import { useTranslation } from 'react-i18next';
import FieldEvaluated from 'app/pages/frames/components/Form/FieldEvaluated';
import { getFormControlProps } from 'app/pages/frames/components/Form/FieldEvaluated/helpers';

import { formControlsPropsCustomer, formCustomerFieldNames } from './constants';
import EmphasisText from "app/components/EmphasisText";

const T_ROOT = 'iFrame.checkout';
export const FormCustomer = () => {
  const { t } = useTranslation();
  const { name, email } = formCustomerFieldNames;

  return (
    <>
      <EmphasisText>{t(`${T_ROOT}.customerInfoTile`)}</EmphasisText>
      <div className="FormCustomer">
        <FieldEvaluated
          {...getFormControlProps(name, formControlsPropsCustomer, t)}
        />
        <FieldEvaluated
          {...getFormControlProps(email, formControlsPropsCustomer, t)}
        />
      </div>
    </>
  );
};
