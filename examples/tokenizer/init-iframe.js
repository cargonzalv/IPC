const config = {
  locale: 'es',
  //checkoutRequestId: "938b5826247c4a8bbb45c1bd55fdcebe",
  publicKey: 'key_fXEkTpZXqwJgWLq2Ac07Arg',
  targetIFrame: 'example',
};

const options = {
  backgroundMode: 'lightMode',
  colorPrimary: '#171D4D',
  colorText: '#212247',
  colorLabel: '#212247',
  inputType: 'minimalMode',
  hideLogo: true,
};

const oldOptions = {
  styles: {
    background: {
      body: '#', //Color del contenedor de las formas de pago
    },
    button_type: 'basic', // basic | rounded | sharp
    colors: {
      primary: '#7db300', //Color de Fondo del Botón de Pago
    },
    font_size: 'baseline', // baseline | compact   -Tamaño de la fuente general
    input_type: 'basic', // basic | rounded | line   -Tipo de Input
    letters: {
      payment_methods: {
        color: '#0079c1', //Color de fuente de las instrucciones e inputs de las formas de pago
      },
    },
    logo: {
      size: 'large', // small | medium | large
      source: 'https://s3-conektacdn-staging.s3.amazonaws.com/cpanel/statics/assets/brands/logos/logo petsy.svg',
      type_image: 'url', // Solo es posible un recurso por HTTPS
    },
    states: {
      empty: {
        border_color: '#AAAAAA', //Color de contorno de Input para expresión regular vacía
      },
      invalid: {
        border_color: '#FF0000', //Color de contorno de Input para expresión regular inválida
      },
      valid: {
        border_color: '#0000FF', //Color de contorno de Input para expresión regular válida
      },
    },
  },
};
// window.ConektaCheckoutComponents.Card({ config, options });
window.ConektaCheckoutComponents.Card({ config, options: oldOptions });
