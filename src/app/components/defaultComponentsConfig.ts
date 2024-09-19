const OUTLINE_INPUT_VARIANT = {
  field: {
    color: 'primary.800',
    fontWeight: 400,
    fontSize: 'sm',
    lineHeight: '2xl',
    background: 'white.500',
    height: '40px',
    width: '100%',
    marginTop: '4px',
    border: '1px solid',
    borderColor: 'disabled.200',
    borderRadius: '4px',
    fontFamily: 'body',
    _focus: {
      borderColor: 'tertiary.500',
    },
    _focusVisible: {
      borderColor: 'tertiary.500',
    },
    _placeholder: {
      color: 'primary.300',
      fontFamily: 'body',
    },
  },
};

export const BASIC_COMPONENTS_CONFIG = {
  Input: {
    variants: {
      outline: OUTLINE_INPUT_VARIANT,
    },
  },
  FormLabel: {
    baseStyle: {
      fontSize: 'sm',
      fontWeight: 400,
      lineHeight: 'md',
      letterSpacing: '0px',
      textAlign: 'left',
      color: 'primary.900',
    },
  },
  FormError: {
    baseStyle: {
      text: {
        fontSize: 'xs',
        color: 'alert.500',
      },
    },
  },
  Button: {
    baseStyle: {
      marginTop: 'md',
    },
  },
  Select: {
    variants: {
      outline: {
        field: { ...OUTLINE_INPUT_VARIANT.field, color: 'primary.300' },
        icon: {
          color: 'primary.100',
        },
      },
    },
    defaultProps: {
      variant: 'outline',
    },
  },
  Alert: {
    baseStyle: {
      container: {
        boxShadow: '0px 5px 14px 0px #2C4CF529',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
      },
      description: {
        fontSize: '12px',
        lineHeight: '17px',
      },
    },
  },
  Link: {
    baseStyle: {
      color: 'primary.900',
      textDecoration: 'underline',
      fontWeight: '400',
    },
  },
};
