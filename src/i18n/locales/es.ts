export default {
  agreementsAcceptanceRequirement: {
    privacyPolicy: {
      first: 'Al continuar estoy aceptando la ',
      second: 'política de privacidad',
      third: ' del servicio.',
    },
  },
  bankTransferInformation: {
    text: 'Accede a tu banca en linea, ingresa la CLABE e información de pago proporcionada y ¡listo!',
  },
  cashInformation: {
    first: '1. Al realizar el pedido, recibirás una referencia de 14 dígitos.',
    second: '2. Acude a cualquiera sucursal de Oxxo y menciona que realizarás un pago con OXXO PAY.',
    third: '3. Dicta tu referencia para realizar el pago correspondiente y ¡listo!',
  },
  creditOrDebitCard: 'Tarjeta de crédito o débito',
  form: {
    errors: {
      equalNumberOfChars: 'El número de caracteres debe de ser de ',
      hasMaxChars: 'El número máximo de caracteres es de ',
      hasMinChars: 'El número mínimo de caracteres es de ',
      hasOnlyDigits: 'Debe contener solo números',
      hasOnlyText: 'Debe contener solo texto',
      isCleanText: 'El texto incluye caracteres no permitidos',
      isMaxValue: 'Debe ser menor o igual a ',
      isMinValue: 'Debe ser mayor o igual a ',
      isMaxValueExp: 'El mes debe ser menor o igual a ',
      isMinValueExp: 'El mes debe ser mayor o igual a ',
      isMinValueYearExp: 'El año debe ser mayor o igual a ',
      isNumber: 'Debe ser un valor numérico',
      isRequired: 'Este dato es necesario',
      isValidCard: 'Debe ser un número de tarjeta válido',
      isValidEmail: 'Debe ser una dirección de correo válida',
      isValidPone: 'Debe ser un teléfono válido',
      isValidTaxPayerRegister: 'Debe ser un RFC válido',
      isValidUrl: 'Debe ser una dirección de internet válida',
      somethingHasGoneWrong: 'Algo ha salido mal',
    },
  },
  hostedCheckout: {
    testbar: {
      message: 'Este link fue generado en modo de pruebas, no lo comparta con sus clientes.',
    },
    paymentSuccess: {
      title: 'Tu compra ha sido completada de forma exitosa',
      description: 'Si deseas comprar otros artículos, ponte en contacto con <0><0>.',
    },
    pendingPayment: {
      title: '¡Ya casi terminas!',
      description: 'Tu referencia ya fue emitida. Realiza el pago para finalizar tu compra.',
      paymentReference: 'Referencia de pago:',
      expires: 'Vence: {{- expiresAt }}',
    },
    internalError: {
      title: 'Ha ocurrido un error inesperado, por favor intente de nuevo.',
    },
    businessError: {
      title: 'Por favor intenta con otro método de pago.',
    },
    expired: {
      title: 'El link que quieres pagar ya no se encuentra disponible',
      availableUntil: 'Estuvo disponible hasta <0><0>',
      needHelp: 'Si deseas realizar alguna otra compra, comunícate con <0><0>.',
    },
    cancelled: {
      title: 'El link que quieres pagar ha sido cancelado o eliminado',
      description:
        'Lo sentimos, pero el link al que intentas ingresar fue cancelado por el vendedor. Comunicate con <0><0>.',
    },
    incoming: {
      title: '¡Tu Link de Pago aún no está activo!',
      description: 'Espera a que llegue la fecha de inicio de la vigencia de Link de Pago',
      validity: 'Vigencia',
      starts: 'Inicia:',
      expires: 'Finaliza:',
      hours: 'a las',
    },
    checkout: {
      shoppingCart: 'Carrito de compra',
      receipt: 'Motivo de cobro:',
      totalAmount: 'Monto total:',
      seeProducts: 'Ver productos',
      concept: 'Concepto',
      quantity: 'Cantidad',
      price: 'Precio',
      total: 'Total',
      subtotal: 'Subtotal',
      shipping: 'Envío',
      tax: 'IVA',
      discount: 'Descuento',
      anyDoubt: '¿Tienes dudas?',
      visitOur: 'Visita nuestro ',
      helpCenter: 'centro de ayuda',
      totalItems: 'Tu carrito tiene {{ totalItems }} artículos',
      product: 'Producto',
    },
    metadata: {
      paymentLinkFrom: 'Recibiste un Link de Pago de {{ merchantName }}',
      paymentReason: 'Paga por {{ paymentReason }} de manera rápida y fácil.',
    },
    common: {
      helpCenter: 'Centro de ayuda',
      visitHelpCenter: 'Visita nuestro <0><0>',
      needPersonalizedHelp: '¿Necesitas ayuda personalizada?',
      paymentLink: 'Link de pago',
      checkout: 'Checkout',
    },
  },
  iFrame: {
    checkout: {
      acceptPrivacyPolicies: 'He leído y acepto las ',
      acceptPrivacyPoliciesOfConekta: ' de Conekta.',
      cardSaved: 'Alta de Tarjeta',
      buttonSubmitFinalize: 'Finalizar',
      buttonSubmitPayCard: 'Pagar',
      buttonSubmitContinue: 'Continuar',
      buttonSubmitMakeAndOrder: 'Realizar pedido',
      cardForm: {
        buttonNext: 'Siguiente',
        errorMisc: 'Ocurrió un problema, selecciona otro método de pago',
        missedThreeDSFlag: 'En este momento no podemos procesar el pago por tarjeta',
        information: 'Detalles de la tarjeta',
        helperText: {
          cardVerificationValue: {
            start: 'Código de seguridad.',
            union: 'y',
            amex: '4 dígitos para AMEX',
            title: '¿Qué es esto?',
            visaMaster: '3 para Visa/Master',
          },
        },
        labelPlaceholders: {
          cardExpMonthYear: 'MM/AA',
          cardNumber: '0000 0000 0000 0000',
          cardVerificationValue: 'CVV',
          cardholderName: 'Nombre como aparece en la tarjeta',
          monthlyInstallments: 'Elige el número de meses sin intereses',
        },
        labelTexts: {
          cardExpMonthYear: 'Expiración',
          cardNumber: 'Número de tarjeta',
          cardVerificationValue: 'Código de seguridad',
          cardholderName: 'Nombre en la tarjeta',
          monthlyInstallments: 'Meses sin intereses',
          savePaymentSource: '¿Deseas guardar la información de tu tarjeta?',
        },
        messageBIN:
          'Te recomendamos utilizar la Tarjeta Digital de tu banco para tener una mejor experiencia comprando en línea',
        monthsWithoutInterest: {
          content: 'Para pagos con Meses sin Interes aplican únicamente tarjetas de crédito nacionales.',
          banamexInfo:
            'Pago a {{installments}} meses sin interés exclusivo para tarjetas emitidas por Citibanamex o American Express.',
          defaultOptionLabel: 'Un solo pago',
          optionLabel: 'Pago a {{installments}} meses (${{monthlyFee}} MXN por mes)',
        },
        cardVerificationTooltip: {
          title: 'Código de seguridad',
          description: 'Encuentras el código en la parte trasera de tu tarjeta.',
          subText: '4 dígitos para AMEX y 3 para Visa/Master Card',
        },
        subscriptionInformation: {
          intervalOptions: {
            half_month: 'quincenal',
            month: 'mes',
            week: 'semana',
            year: 'año',
          },
          subscriptionEnd: 'Tu suscripción finaliza el <bold>{{subscriptionEnd}}</bold>.',
          subscriptionStart: 'Tu suscripción comienza el <bold>{{subscriptionStart}}</bold>.',
          subscriptionStartToEnd:
            'Suscripción del <bold>{{subscriptionStart}}</bold> a <bold>{{subscriptionEnd}}</bold>.',
          title: 'Suscripción',
          tooltipInformation:
            'Se hará el cargo a la tarjeta de crédito/débito de forma periódica, hasta que realices la cancelación o se cumpla el tiempo acordado de la suscripción.',
          trialInformation: 'Tienes una prueba de {{trial_period_days}} días sin costo.',
        },
      },
      pay_title_datalogic: 'Podrás pagar en más de 11 mil puntos',
      pay_subtitle_datalogic: 'Ver mapa',
      pay_title_oxxo: 'podrás pagar en efectivo en cualquier oxxo ',
      pay_title_bank_transfer: 'paga por transferencia bancaria',
      pay_title_pespay:  'podrás pagar en más de 6 mil puntos',
      openAmountForm: {
        continueButton: 'Continuar al pago',
        labelPlaceholders: {
          amount: '$0.00',
        },
        labelTexts: {
          amount: 'Ingresa el valor a pagar',
        },
      },
      disabledOpenAmountForm: {
        description: '¡El QR al que estás intentando acceder ya no está disponible!',
        continueButton: 'Volver a intentar',
      },
      cardLastFour: 'Tarjeta con terminación ',
      goBack: 'Regresar',
      customerForm: {
        information: 'Información del comprador',
        labelTexts: {
          customerInfo: {
            email: 'Correo electrónico',
            name: 'Nombre Completo',
          },
        },
        placeholderTexts: {
          customerInfo: {
            email: 'ej. juan@correo.com',
            name: 'ej. Juan Pérez Ramos',
          },
        },
      },
      conektaCashReferenceMessage:
        'Enviaremos una referencia de pago con todas las instrucciones a tu email para que puedas finalizar tu compra.',
      referenceMessage:
        'Enviaremos una referencia de pago a tu correo para que puedas realizar el pago. ' +
        'Sigue las instrucciones del correo para completar tu compra.',
      editPaymentInformation: 'Editar información de pago',
      errorMessages: {
        notAllowedPaymentMethod: 'Método de pago no autorizado',
      },
      grettings: {
        default: 'Hola {{customerInfoName}} recibiste una solicitud de pago de ',
        hostedPayment: 'Finaliza tu compra de ',
        recurrent: 'Recibiste una solicitud de pago de ',
      },
      header: {
        front: 'Paga seguro con',
        back: 'Conekta es el portal que usa <1>{{company}}</1> para procesar sus pagos en línea de manera segura y confiable.',
      },
      paymentMethod: {
        bank_transfer: {
          description: 'Genera tu pedido y utiliza la CLABE que te proporcionaremos para realizar tu pago.',
          title: 'Transferencia',
        },
        BankTransfer: {
          description: 'Genera tu pedido y utiliza la CLABE que te proporcionaremos para realizar tu pago.',
          title: 'Transferencia',
        },
        card: {
          description: 'Pagos seguros y rápidos con cualquiera de tus tarjetas.',
          title: 'Tarjeta',
        },
        Card: {
          description: 'Pagos seguros y rápidos con cualquiera de tus tarjetas.',
          title: 'Tarjeta',
        },
        cash: {
          description: 'Realiza tu pago en +19,000 sucursales de OXXO.',
          title: 'Efectivo',
        },
        Cash: {
          description: 'Realiza tu pago en +19,000 sucursales de OXXO.',
          title: 'Efectivo',
          descriptionLimitExceeded: '¡Lo sentimos! superaste el límite permitido de $10,000.00 para pago en efectivo',
        },
        conektaCash: {
          description: 'Realiza tu pago en +19,000 sucursales de OXXO.',
          title: '<strong>Conekta</strong> efectivo',
        },
        bnpl: {
          description: '',
          title: 'Pago a plazos',
        },
        Bnpl: {
          description: '',
          title: 'Pago a plazos',
        },
      },
      additionalPartners: '+16 cadenas',
      privacyPolicies: 'Políticas de Privacidad',
      savedUserCardsListForm: {
        addOtherCard: 'Ingresa los datos de tu tarjeta de crédito o débito',
        buttonDescription: 'Realizar pago',
        cardDescription: 'Tarjeta de {{type}} con terminación <bold>**** {{lastDigits}}</bold>',
        limitOfSavedCardsPerUserWarning: 'Has llegado al máximo de tarjetas que puedes registrar',
        type: {
          credit: 'crédito',
          debit: 'débito',
        },
      },
      selectPaymentMethod: 'Cobra y paga en línea',
      breadcrumbs: {
        paymentMethods: 'Medios de pago',
        shippingContactInfo: 'Información de envío',
        congrats: '¡Listo!',
      },
      noPaymentMethodsMessage:
        'No hay métodos de pago disponibles para realizar el pago. Por favor, comunícate con el comercio.',
      selectPaymentMethodValidation: 'Selecciona un método de pago',
      selectPaymentMethodValidationOnly: 'Método de pago',
      customerInfoTile: 'ingresa tu información',
      moreList: 'y 20+ ...',
      shippingForm: {
        labelTexts: {
          shippingContact: {
            address: {
              city: 'Alcaldía o municipio',
              postalCode: 'Código postal',
              state: 'Estado',
              street1: 'Calle',
              street2: 'Colonia',
            },
            phone: 'Teléfono (opcional)',
          },
        },
        title: '¿En dónde quieres recibir tu producto?',
        personalInformationSectionTitle: 'Datos personales',
        shippingSectionTitle: 'Datos de envío',
      },
      descriptionBnpl:
        'Compra hoy y paga después a plazos,\nsin necesidad de tener una tarjeta de crédito.\n\nAl hacer clic en “Finalizar” serás redirigido a Nelo donde podrás solicitar tu financiamiento.\nPara usar éste método de pago necesitas contar con una tarjeta de débito.',
    },
    confirmation: {
      banktransfer: {
        title: 'Transfiere desde tu banca en línea a esta CLABE Interbancaria para completar tu compra.',
        amount: 'Cantidad a transferir',
        buyer: 'Nombre',
        company_name: 'Empresa',
        number_order: 'Número de orden',
        payment_expirate_at: 'Fecha de expiración',
        payment_method: {
          first: 'Método de pago',
          second: 'Pago por Transferencia',
        },
        reason_payment: 'Cobro',
        payment_reference: 'CLABE Interbancaria',
        shipping_address: 'Dirección de envío',
        success_description: {
          first: 'Tu referencia para ',
          second: ' por la cantidad de ',
          three: ' pesos ha sido creada con éxito. Sólo tienes que pagarla para terminarla compra',
        },
        success_title: 'Referencia generada',
        copy_reference: 'Copiar número',
        payment: 'Cobro',
      },
      bnpl: {
        amount: 'Monto a pagar',
        success_amount: 'Monto pagado',
        buyer: 'Comprador',
        company_name: 'Nombre de la empresa',
        failure_title: 'Tu pago no ha sido completado con éxito',
        number_order: 'Número de orden',
        payment_method: 'Medio de pago',
        payment_method_text: 'Pago a plazos',
        shipping_address: 'Dirección de envío',
        success_description: {
          first: 'Tu compra en ',
          second: ' por la cantidad de ',
          three: ' pesos ha sido completada con éxito.',
        },
        failure_description: {
          first: 'Tu compra por la cantidad de ',
          second: ' no se pudo completar con éxito.',
        },
        success_title: 'Tu pago se realizó de manera exitosa',
      },
      card: {
        amount: 'Monto a pagar',
        buyer: 'Nombre',
        card_number: 'Tarjeta con terminación',
        reason_payment: 'Cobro',
        card_saved: {
          error: 'Hubo un error al guardar los datos de tu tajeta',
          success: 'Tu tarjeta se guardó exitosamente',
        },
        company_name: 'Empresa',
        credit_type_info: 'Crédito',
        debit_type_info: 'Débito',
        points: '...',
        intervalOptions: {
          half_month: 'quincenal',
          month: 'mes',
          week: 'semana',
          year: 'año',
        },
        monthlyInstallmentsInformation: 'Dividido en {{monthlyInstallments}} cuotas de ',
        payment_method_card: 'Método de pago',
        shipping_address: 'Dirección de envío',
        subscription_info: {
          startInfo: 'El primer cargo se realizará el día {{subscriptionStart}} sin finalización.',
          startToEndInfo:
            'El primer cargo se realizará el día {{subscriptionStart}} finalizando el {{subscriptionEnd}}.',
          title: 'Suscripción por {{amount}}/{{interval}}',
          trialInfo: 'Tu periodo de prueba finaliza el {{trialEnd}}.',
        },
        subscription_success_title: 'Disfruta de tu suscripción',
        success_title: 'Pago realizado',
        success_subtitle: 'Puedes cerrar esta ventana o <1>volver al sitio</1>',
        success_description: {
          first: 'Tu compra en ',
          second: ' por la cantidad de ',
          three: ' pesos ha sido completada con éxito.',
          threeMonthlyInstallments: ' pesos ha sido completada con éxito divido en {{monthlyInstallments}} cuotas de ',
        },
        declined_description: {
          first: 'Tu compra por la cantidad de ',
          second: 'pesos ha sido rechazada',
        },
        share: {
          title: 'Comprobante de pago por',
          buttonsTitle: 'Comparte este comprobante de pago',
        },
      },
      cash: {
        amount: 'Cantidad a pagar',
        buyer: 'Nombre',
        comission: '+$13.00 pesos por comisión en OXXO',
        company_name: 'Empresa',
        number_order: 'Número de orden',
        reason_payment: 'Cobro',
        payment_expirate_at: 'Fecha de expiración',
        payment_method: {
          first: 'Método de pago',
          second: 'Pago en Efectivo',
        },
        payment_reference: 'Referencia de pago',
        shipping_address: 'Dirección de envío',
        success_description: {
          first: 'Tu referencia para ',
          second: ' por la cantidad de ',
          three: ' pesos ha sido creada con éxito. Sólo tienes que pagarla para terminar la compra',
        },
        list_items_datalogic: {
          first: 'Dirígete a uno de nuestros Puntos de Pago en efectivo.',
          second: 'Menciona que pagarás con <strong>Conekta</strong> efectivo.',
          three: 'Proporciona al cajero el número de referencia y realiza tu pago.',
        },
        list_items_oxxo: {
          first: 'Ve a tu OXXO más cercano.',
          second: 'Menciona que realizarás un pago en efectivo con OXXO Pay',
          three: 'Realiza tu pago',
        },
        chains_pay_title: 'Cadenas dónde pagar',
        chains_pay:
          'Waldos, Eleczion, Farmacias San Francisco de Asis, FarmaTodo, Farmacias de Descuento Unión, Kiosko,' +
          ' Farmacias Bazar, Woolworth’s, Del Sol, Yepas, Alsúper.',
        chains_list: 'Ver listado de cadenas',
        success_title: 'Referencia generada',
        copy_reference: 'Copiar número',
        reference_number: 'número de referencia',
        pay_title_datalogic: 'Paga en más de 11 mil puntos',
        pay_subtitle_datalogic: 'Ver mapa',
        pay_title_oxxo: 'paga en cualquier oxxo',
        pay_title_pespay: 'paga en más de 6 mil puntos',
      },
      common: {
        email_confirmation: 'Enviamos tu comprobante de pago a',
        reference_email_confirmation: 'Enviamos tu referencia de pago a',
        reference_confirmation_oxxo: 'Enviamos la referencia a tu correo con esta información',

        share: {
          title: 'comparte esta referencia de pago',
          label: 'Compartir:',
          fileShareName: 'Confirmacion.png',
          whatsAppReferenceMessage:
            '*¡Tu referencia de Conekta efectivo está Lista!*%0A%0A' +
            'Hola! Te comparto los datos de mi compra por *{{amount}}*.%0A%0A' +
            'El número de referencia es ```{{reference}}```.%0A' +
            'Concepto del pago: ```{{concept}}```.%0A%0A' +
            '¡Saludos!%0A%0A' +
            '_Powered by Conekta_',
          whatsAppPaymentConfirmationMessage:
            '*¡Pago Confirmado!*%0A%0A' +
            'Hola! Te comparto los datos del pago de mi compra por *{{amount}}*.%0A%0A' +
            'El número de orden del pago es ```{{reference}}```.%0A' +
            'Concepto: ```{{concept}}```.%0A%0A' +
            '¡Saludos!%0A%0A' +
            '_Powered by Conekta_',
          tooltipemail: 'Compartir vía E-mail',
          tooltipwhatsapp: 'Compartir vía WhatsApp',
          tooltipshare: 'Compartir en otros medios',
          tooltipcontent_copy: 'Llevar al portapapeles',
          email: 'Email',
          whatsapp: 'WhatsApp',
          print: 'Imprimir',
          modal: {
            title: 'Comparte tu comprobante de pago',
            reference_title: 'Comparte tu referencia de pago',
            subtitle: 'Ingresa la dirección de correo a la cual quieres enviar tu comprobante de pago',
            reference_subtitle: 'Ingresa la dirección de correo a la cual quieres enviar tu referencia de pago',
            inputLabel: 'Correo electrónico',
            error: 'Debe ser una dirección de correo valida',
            buttonCancel: 'Cancelar',
            buttonSubmit: 'Enviar correo',
          },
        },
      },
      header: {
        reference_title: 'Referencia del pago por',
        paymentWith: {
          banktransfer: 'Referencia\nde pago',
          bnpl: '',
          card: 'Pago exitoso',
          cash: 'Referencia\nde pago',
        },
        paymentDeclined: 'Pago rechazado',
      },
      redirection_message: {
        information:
          'En <strong>{{seconds}} segundos</strong> serás redireccionado a {{company}}<br>Si no deseas esperar, ',
        clic: 'haz clic acá',
      },
    },
    typePaymentLink: {
      payWithCash: 'Pagar con efectivo',
      payWithCard: 'Pagar con tarjeta',
      payWithTransfer: 'Pagar con transferencia',
    },
    tokenizer: {
      error: 'Ocurrió un problema, por favor intenta de nuevo',
      ourCompany: 'nuestra empresa',
    },
    linkToWebsite: '¿Qué es Conekta?',
    securePayments: 'Los pagos son seguros y encriptados',
    expiredTitle: 'El estatus del checkout es incorrecto.',
  },
};
