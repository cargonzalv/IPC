import { useTranslation } from 'react-i18next';
import { composeValidators } from 'app/pages/frames/util/validations';
import { Field } from 'react-final-form';

import { IFieldSelectEvaluated } from './interface';
import { CustomSelect } from 'app/components/CustomSelect/CustomSelect';

export const FieldSelectEvaluated = ({
  disabled,
  id = "",
  options,
  styles,
  tRootLabelTexts,
  validations = [],
  onChange,
  defaultValue,
}: IFieldSelectEvaluated) => {
  const { t } = useTranslation();

  return (
    <Field
      classNameFieldSet={id}
      name={id}
      validate={composeValidators(...validations)}
    >
      {({ input }) => (
        <div className="field-wrapper__select">
          <CustomSelect
            {...{ disabled, input, options, styles }}
            label={ t(`${tRootLabelTexts}.${id}`) || '' }
            onChange={onChange}
            defaultValue={defaultValue}
          />
        </div>
      )}
    </Field>
  );
};
