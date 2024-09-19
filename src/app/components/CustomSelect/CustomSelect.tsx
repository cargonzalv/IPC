import { useEffect, useState } from 'react';

import { FormLabel } from '@chakra-ui/form-control';
import { Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useThemeConfig } from 'app/util/hooks/iframeConfig';
import { IOptionType, ISelect } from './interface';

export const CustomSelect = ({
  input,
  label,
  options,
  onChange,
  defaultValue,
}: ISelect) => {
  const { value, onChange: inputOnChange } = input;
  const [optionValueSelected, setOptionValueSelected] = useState(value);
  const [optionsFormatter, setOptionsFormatters] = useState(options);
  const { getPropsSelect } = useThemeConfig();
  const { buttonBackgroundColor, buttonBorderColor, colorItem, bgItem, bgItem_hover, color } = getPropsSelect();

  const handleOnChange = () => {
    inputOnChange(optionValueSelected);
    if (onChange) onChange(optionValueSelected);
  };

  useEffect(() => {
    if (defaultValue) setOptionValueSelected(defaultValue);
    if (!options) return;
    const formatter = options.reduce((obj: any, item: IOptionType) => {
      obj[item.value] = {
        value: item.value,
        label: item.label
      };
      return obj;
    }, {});
    setOptionsFormatters(formatter);
  }, [options]);

  useEffect(() => {
    handleOnChange();
  }, [optionValueSelected]);

  return (
    <>
      <FormLabel>
        {label}
      </FormLabel>

      <Menu placement={'bottom-start'} flip={false} matchWidth={true} closeOnBlur={false} >
        <MenuButton px={4} as={Button} rightIcon={<ChevronDownIcon />}
                    py={2}
                    fontSize={'sm'}
                    w='100%'
                    display='flex'
                    border='1px'
                    backgroundColor={buttonBackgroundColor}
                    borderColor={buttonBorderColor}
                    color={color}
                    _hover={{
                      bg: buttonBackgroundColor,
                      borderColor: buttonBorderColor,
                    }}
                    _active={{
                      bg: buttonBackgroundColor,
                      borderColor: buttonBorderColor,
                    }}
                    _focus={{
                      bg: buttonBackgroundColor,
                      borderColor: buttonBorderColor,
                    }}
        >
          <Text display='flex' justifyContent='flex-start' color={color} overflow='hidden'>
            { optionsFormatter && optionsFormatter[optionValueSelected].label }
          </Text>
        </MenuButton>
        <MenuList>
          {options?.map((option) => {
            const isSelected = option.value === optionValueSelected;
            return(
              <MenuItem
                backgroundColor={ isSelected ? bgItem : undefined }
                color={ isSelected ? colorItem : undefined }
                key={`option-${option.label}`}
                p={4}
                _hover={{
                  bg: bgItem_hover,
                }}
                isDisabled={option.isDisabled}
                onClick={() => setOptionValueSelected(option?.value)}
                icon={ isSelected ? <CheckIcon /> : undefined}>
                {option.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};
