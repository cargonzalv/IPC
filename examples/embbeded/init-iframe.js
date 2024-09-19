const config = {
  locale: 'es',
  //checkoutRequestId: '88d28003-d42b-4eef-809c-0f4881e92bc2', // link de conekta
  //publicKey: 'key_fXEkTpZXqwJgWLq2Ac07Arg',
  checkoutRequestId: 'a14827de-ea8f-4b67-9e29-635b52b89175', // link de femsa
  publicKey: 'key_bkKvivtijdbNyHXQKtjrbsB',
  targetIFrame: '#example',
  // useExternalSubmit: true, //only for external submit
};
const options = {
  backgroundMode: 'darkMode',
  colorPrimary: '#2C4CF5',
  colorLabel: '#B4B5D3',
  colorText: '#B4B5D3',
  inputType: 'flatMode',
  hideLogo: false,
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

// let submitFormFunction; // only for external submit
const callbacks = {
  // Evento que permitirá saber que el token se creado de forma satisfactoria, es importante que se consuman los datos que de él derivan.
  onCreateTokenSucceeded: function (token) {
    console.log('token', token);
  },
  // Evento que permitirá saber que el token se creado de manera incorrecta, es importante que se consuman los datos que de él derivan y se hagan las correciones pertinentes.
  onCreateTokenError: function (error) {
    console.log(error);
  },
  // Evento que notifica cuando finalizó la carga del tokenizer
  onGetInfoSuccess: function (loadingTime) {
    console.log('loading time en milisegundos', loadingTime.initLoadTime);
  },
  // Evento que actualizará el trigger de submit externo
  // onUpdateSubmitTrigger: function (submitFunction) {
  //   submitFormFunction = submitFunction;
  // }, // only for external submit
  onFinalizePayment: function (order) {
    console.log('success: ', order);
  },
  onErrorPayment: function (error) {
    console.log('error en pago: ', error);
  },
};

window.ConektaCheckoutComponents.Integration({ config, options, callbacks });
