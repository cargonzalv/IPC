import classNames from 'classnames';

import { INPUT_TEXT_ALIGN, BORDER_PROP_BY_TYPE } from './constants';

import { IInputForm } from 'app/pages/frames/components/Form/interface';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ITextFieldWrapper, TextFieldWrapper } from 'app/pages/frames/components/styled-components/TextFieldWrapper';
import ChakraInput from 'app/components/ChakraInput';
import { NumberFormatCustom } from 'app/components/NumberFormatCustom';
import { useConfigContext } from 'app/context/ConfigContext';
import { InputType } from 'app/util/theme';

export const InputForm = (props: IInputForm) => {
  const {
    alignInput,
    classNameFieldset,
    descriptionField,
    input,
    labelOptions,
    maxLength,
    meta: { error, touched, valid, submitFailed },
    placeholder,
    onChange,
    format,
    prefix,
    rightElement = [],
    type,
    ...rest
  } = props;
  const { value, onChange: inputOnChange } = input;
  const THEME_CONTEXT: any = useContext(ThemeContext);
  const {
    iframe: { isPlayground },
  } = useConfigContext();
  const inputType = BORDER_PROP_BY_TYPE[THEME_CONTEXT.inputType as InputType] || BORDER_PROP_BY_TYPE.basic;
  const isInputEmpty: boolean = value === '';
  const className = classNames(INPUT_TEXT_ALIGN[alignInput || 'left'], THEME_CONTEXT.inputType);

  const handleOnChange = (event: Event) => {
    inputOnChange(event);
    onChange && onChange(event);
  };

  const fieldWrapperProps: ITextFieldWrapper = {
    className,
    inputType,
    touched,
    error,
    inputEmpty: isInputEmpty && touched,
    valid: input.valid,
    theme: input.theme,
    ...rest,
  };

  const inputProps = {
    className,
    id: input.name,
    ...input,
    onChange: handleOnChange,
    ...rest,
    ...{
      maxLength,
      placeholder,
    },
    type: inputType,
  };

  return (
    <div className={classNames(classNameFieldset)}>
      <TextFieldWrapper {...fieldWrapperProps}>
        {format || prefix ? (
          <NumberFormatCustom
            label={labelOptions.text}
            helper={descriptionField?.text}
            error={valid ? '' : error}
            input={inputProps}
            formControlProps={{ isInvalid: error && submitFailed }}
            format={format ?? ''}
            prefix={prefix}
            rightElement={rightElement}
            isReadOnly={isPlayground}
          />
        ) : (
          <ChakraInput
            label={labelOptions.text}
            helper={descriptionField?.text}
            error={valid ? '' : error}
            input={inputProps}
            formControlProps={{ isInvalid: error && submitFailed }}
            rightElement={rightElement}
            isReadOnly={isPlayground}
          />
        )}
      </TextFieldWrapper>
    </div>
  );
};
