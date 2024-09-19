import { IFieldEvaluated } from 'app/pages/frames/components/Form/FieldEvaluated/interface';
import { TFormComponentType } from 'app/pages/frames/components/Form/interface';
import { TFunction } from 'i18next';

import { FORM_COMPONENT_TYPES } from './constants';
import { getPropertyByPath } from 'app/util/helpers';

export const getComponentByType = (type: TFormComponentType) => FORM_COMPONENT_TYPES[type];

export const getLabelType = (type: string) =>
  type === 'checkbox' || type === 'toggle' ? 'default' : 'labelPlaceholder';

export const getFormControlProps = (
  id: string,
  controlProps: (t: TFunction) => void,
  t: TFunction,
): IFieldEvaluated => {
  const PROPS: any = getPropertyByPath(controlProps(t), id, undefined);
  PROPS.id = id;
  return PROPS;
};
