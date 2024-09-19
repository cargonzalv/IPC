import { useContext } from 'react';
import ReactSelect, {components, OptionProps} from 'react-select';
import { DefaultTheme, ThemeContext } from 'styled-components';

import { getOptionTypeByValue, getStylesFromTheme } from './helpers';
import { IOptionType, ISelect } from './interface';

import { Flex, Text } from '@chakra-ui/layout';
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { getColorOptions } from 'app/components/Select/constants';
import { FormLabel } from '@chakra-ui/form-control';

const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    {/* this negative margin is because react-select adds an internal 
    padding to the DropDownIndicator and it cannot be removed  */}
    <ChevronDownIcon boxSize={6} marginTop="-4px" />
  </components.DropdownIndicator>
);

const Option = (props: OptionProps<IOptionType>) => {
  const {
    children,
    className,
    cx,
    getStyles,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
    innerProps,
  } = props;
  const { isDarkMode } = useThemeConfig();

  return (
    <Flex
      ref={innerRef}
      css={getStyles("option", props)}
      className={cx(
        {
          option: true,
          "option--is-disabled": isDisabled,
          "option--is-focused": isFocused,
          "option--is-selected": isSelected,
        },
        className
      )}
      {...innerProps}
    >
      <Text
        fontSize="sm"
        lineHeight="sm"
        letterSpacing="0px"
        textAlign="left"
        color={getColorOptions(isDarkMode, isSelected)}
      >
        {isSelected ? <CheckIcon marginRight={3} /> : undefined}
        {children}
      </Text>
    </Flex>
  );
};

const DEFAULT_SELECT_COMPONENTS: any = {
  IndicatorSeparator: () => null,
  DropdownIndicator,
  Option,
};

export const Select = ({
  disabled,
  input,
  labelOptions,
  options,
  onChange,
  tooltipHelper,
  ...rest
}: ISelect) => {
  let THEME_CONTEXT: DefaultTheme = useContext(ThemeContext);
  const { isDarkMode, isFlatMode } = useThemeConfig();
  THEME_CONTEXT = {
    ...THEME_CONTEXT,
    isDarkMode,
    isFlatMode,
  };
  const STYLES_FROM_THEME = getStylesFromTheme(THEME_CONTEXT);
  const { value, onChange: inputOnChange } = input;

  const handleOnChange = ({ value: inputValue }: any) => {
    inputOnChange(inputValue);
    onChange && onChange(inputValue);
  };
  const SelectContainer = ({ isDisabled, ...restContainer }: any) => (
    <>
      <FormLabel>
        {labelOptions.text}
      </FormLabel>

      <components.SelectContainer
        {...restContainer}
      ></components.SelectContainer>
    </>
  );

  return (
    <ReactSelect
      {...{
        input,
        options,
      }}
      {...rest}
      components={{ ...DEFAULT_SELECT_COMPONENTS, SelectContainer }}
      isDisabled={disabled}
      isSearchable={false}
      onChange={handleOnChange}
      styles={{
        ...STYLES_FROM_THEME,
        menuList: (base) => ({
          ...base,
          "::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
          },
        }),
      }}
      value={getOptionTypeByValue(value, options)}
      filterOption={null}
    />
  );
};
