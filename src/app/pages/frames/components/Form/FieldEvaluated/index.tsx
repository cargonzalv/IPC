import { useTranslation } from 'react-i18next';
import { composeValidators } from 'app/pages/frames/util/validations';
import { useContext } from 'react';
import { Field } from 'react-final-form';
import { ThemeContext } from 'styled-components';

import { getComponentByType } from './helpers';
import { IFieldEvaluated } from './interface';

const FieldEvaluated = ({
  id,
  name = '',
  tooltipHelper,
  tRootLabelTexts,
  tRootPlaceholders = '',
  type = 'text',
  validations = [],
  onChange,
  format,
  prefix,
  rightElement,
  ...rest
}: IFieldEvaluated) => {
  const { t } = useTranslation();
  const THEME_CONTEXT: any = useContext(ThemeContext);
  const Component = getComponentByType(type);

  return (
    <Field
      classNameFieldset={`${id} field-evaluated ${THEME_CONTEXT.inputType}`}
      labelOptions={{
        htmlFor: id,
        text: tRootLabelTexts && t(`${tRootLabelTexts}.${id}`),
        tooltipHelper,
      }}
      name={id ? id : name}
      placeholder={tRootPlaceholders && t(`${tRootPlaceholders}.${id}`)}
      validate={composeValidators(...validations)}
      {...{ type }}
      {...rest}
      {...(type === 'number' && { parse: (value) => value.replace(/\D/g, '') })}
    >
      {(props) => (
        <Component
          {...props}
          onChange={onChange}
          format={format}
          prefix={prefix}
          rightElement={rightElement}
        />
      )}
    </Field>
  );
};

export default FieldEvaluated;
