export default {
  agreementsAcceptanceRequirement: {
    privacyPolicy: {
      first: 'By continuing I am accepting the ',
      second: 'privacy terms',
      third: ' of the service.',
    },
  },
  bankTransferInformation: {
    text: 'Access your online banking, enter the CLABE and payment information provided and voila!',
  },
  cashInformation: {
    first: '1. When ordering, you will receive a 14-digit reference.',
    second: '2. Go to any Oxxo branch and mention that you will make a payment with OXXO PAY.',
    third: "3. Dictate your reference to make the corresponding payment and that's it!",
  },
  creditOrDebitCard: 'Credit or Debit Card',
  form: {
    errors: {
      equalNumberOfChars: 'The number of characters must be ',
      hasMaxChars: 'The maximum number of characters is ',
      hasMinChars: 'The minimum number of characters is ',
      hasOnlyDigits: 'Must contain only numbers',
      hasOnlyText: 'Must contain only text',
      isCleanText: 'Text includes invalid characters',
      isMaxValue: 'Must be at most ',
      isMinValue: 'Must be at least ',
      isMaxValueExp: 'The month must be at most ',
      isMinValueExp: 'The month must be at least ',
      isMinValueYearExp: 'The year must be at least ',
      isNumber: 'Must be a numerical value',
      isRequired: 'This field is required',
      isValidCard: 'Must be a valid card number',
      isValidEmail: 'Must be a valid Email address',
      isValidPone: 'Must be a valid phone',
      isValidTaxPayerRegister: 'Must be a valid Mexican Taxpayer ID',
      isValidUrl: 'Must be a valid URL',
      somethingHasGoneWrong: 'Something has gone wrong',
    },
  },
  hostedCheckout: {
    testbar: {
      message: "This link was generated in sandbox mode, don't share it with your customers.",
    },
    paymentSuccess: {
      title: 'Your purchase has been completed successfully',
      description: 'If you want to buy other items, please contact <0><0>.',
    },
    pendingPayment: {
      title: "You're almost done!",
      description: 'Your reference has already been issued. Make the payment to finalize your purchase.',
      paymentReference: 'Payment reference:',
      expires: 'Expires: {{- expiresAt }}',
    },
    internalError: {
      title: 'An unexpected error has occurred, please try again.',
    },
    businessError: {
      title: 'Please try another payment method.',
    },
    expired: {
      title: 'The link you want to pay for is no longer available',
      availableUntil: 'Was available until <0><0>',
      needHelp: 'If you want to make any other purchase, contact <0><0>.',
    },
    cancelled: {
      title: 'The link you want to pay has been canceled or removed',
      description:
        'We are sorry, but the link you are trying to enter was canceled by the seller. Communicate with <0><0>.',
    },
    incoming: {
      title: 'Your Payment Link is not active yet!',
      description: 'Wait for the effective date of the Payment Link to arrive',
      validity: 'Validity',
      starts: 'Starts:',
      expires: 'Expires:',
      hours: 'at',
    },
    checkout: {
      shoppingCart: 'Shopping cart',
      receipt: 'Receipt:',
      totalAmount: 'Total amount:',
      seeProducts: 'See products',
      concept: 'Concept',
      quantity: 'Quantity',
      price: 'Price',
      total: 'Total',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      tax: 'VAT',
      discount: 'Discount',
      anyDoubt: 'Any doubt?',
      visitOur: 'Visit our ',
      helpCenter: 'help center',
      totalItems: 'Your cart has {{ totalItems }} items',
      product: 'Product',
    },
    metadata: {
      paymentLinkFrom: 'You received a Payment Link from {{ merchantName }}',
      paymentReason: 'Pay for {{ paymentReason }} quickly and easily.',
    },
    common: {
      helpCenter: 'Help Center',
      visitHelpCenter: 'Visit our <0><0>',
      needPersonalizedHelp: 'Do you need personalized help?',
      paymentLink: 'Payment link',
      checkout: 'Checkout',
    },
  },
  iFrame: {
    checkout: {
      acceptPrivacyPolicies: 'I have read and accept the ',
      acceptPrivacyPoliciesOfConekta: ' of Conekta.',
      cardSaved: 'Add Card',
      buttonSubmitFinalize: 'Finalize',
      buttonSubmitPayCard: 'Pay',
      buttonSubmitContinue: 'Continue',
      buttonSubmitMakeAndOrder: 'Make an order',
      cardForm: {
        buttonNext: 'Next',
        errorMisc: 'A problem occurred, please select a different payment method',
        missedThreeDSFlag: 'At this time we cannot process payment by card',
        information: 'Card details',
        helperText: {
          cardVerificationValue: {
            start: '',
            union: 'and',
            amex: '4 digits for Amex',
            title: 'What is this?',
            visaMaster: '3 for Visa/Master',
          },
        },
        labelPlaceholders: {
          cardExpMonthYear: 'MM/YY',
          cardNumber: '0000 0000 0000 0000',
          cardVerificationValue: 'CVV',
          cardholderName: 'Enter the name of the cardholder',
          monthlyInstallments: 'Choose the number of monthly installments',
        },
        labelTexts: {
          cardExpMonthYear: 'Exp Date',
          cardNumber: 'Card Number',
          cardVerificationValue: 'CVV',
          cardholderName: 'Cardholder Name',
          monthlyInstallments: 'Months without interest',
          savePaymentSource: 'Do you want to save your card information?',
        },
        messageBIN: "We remind you to use your bank's Digital Card to have a better experience buying the line",
        monthsWithoutInterest: {
          content: 'For payments with Months without Interest, only national credit cards apply.',
          banamexInfo:
            '{{installments}}-month interest-free payment is exclusive for cards issued by Citibanamex or American Express.',
          defaultOptionLabel: 'Payment at an exhibition',
          optionLabel: '{{installments}}-month payment (${{monthlyFee}} MXN per month)',
        },
        cardVerificationTooltip: {
          title: 'Security code',
          description: 'You find the code on the back of your card.',
          subText: '4 digits for AMEX and 3 for Visa/Master Card',
        },
        subscriptionInformation: {
          intervalOptions: {
            half_month: 'biweekly',
            month: 'month',
            week: 'week',
            year: 'year',
          },
          subscriptionEnd: 'Your subscription ends on <bold> {{subscriptionEnd}} </bold>.',
          subscriptionStart: 'Your subscription starts on <bold> {{subscriptionStart}} </bold>.',
          subscriptionStartToEnd:
            'Subscription from <bold> {{subscriptionStart}} </bold> to <bold> {{subscriptionEnd}} </bold>.',
          title: 'Subscription',
          tooltipInformation:
            'The credit / debit card will be charged periodically, until you make the cancellation or the agreed time of the subscription expires.',
          trialInformation: 'You have a trial of {{trial_period_days}} days at no cost.',
        },
      },
      pay_title_datalogic: 'You can pay in more than 11 thousand points',
      pay_subtitle_datalogic: 'See map',
      pay_title_oxxo: 'you can pay in cash in any oxxo',
      pay_title_bank_transfer: 'pay by bank transfer',
      pay_title_pespay:  'you can pay in more than 6 thousand points',
      openAmountForm: {
        continueButton: 'Continue to payment',
        labelPlaceholders: {
          amount: '$0.00',
        },
        labelTexts: {
          amount: 'Enter the value to pay',
        },
      },
      disabledOpenAmountForm: {
        description: '¡The QR you are trying to access is no longer available!',
        continueButton: 'Try again',
      },
      cardLastFour: 'Card ending in ',
      goBack: 'Go back',
      customerForm: {
        information: 'Customer Information',
        labelTexts: {
          customerInfo: {
            email: 'Email',
            name: 'Full Name',
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
        'We will send a payment reference with all the instructions to your email so you can complete your purchase.',
      referenceMessage:
        'We will send a payment reference to your email so you can make the payment. ' +
        'Follow the instructions in the email to complete your purchase.',
      editPaymentInformation: 'Edit payment information',
      errorMessages: {
        notAllowedPaymentMethod: 'Payment method not allowed',
      },
      grettings: {
        default: 'Hello {{customerInfoName}} you received a payment request from ',
        hostedPayment: 'Finalize your purchase of ',
        recurrent: 'You received a payment request from ',
      },
      header: {
        front: 'Pay securely with',
        back: 'Conekta is the portal used by <1>{{company}}</1> to process your online payments safely and reliably.',
      },
      paymentMethod: {
        bank_transfer: {
          description: 'Generate your order and use the CLABE that we will provide you to make your payment.',
          title: 'Transfer',
        },
        BankTransfer: {
          description: 'Generate your order and use the CLABE that we will provide you to make your payment.',
          title: 'Transfer',
        },
        card: {
          description: 'Secure and fast payments with any of your cards.',
          title: 'Card',
        },
        Card: {
          description: 'Secure and fast payments with any of your cards.',
          title: 'Card',
        },
        cash: {
          description: 'Make your payment at +19,000 OXXO branches.',
          title: 'Cash',
        },
        Cash: {
          description: 'Make your payment at +19,000 OXXO branches.',
          title: '<strong>Conekta</strong> cash',
          descriptionLimitExceeded: 'We are sorry! you exceeded the $10,000.00 limit for cash payment',
        },
        conektaCash: {
          description: 'Make your payment at +19,000 OXXO branches.',
          title: '<strong>Conekta</strong> cash',
        },
        bnpl: {
          description: '',
          title: 'Buy now pay later',
        },
        Bnpl: {
          description: '',
          title: 'Buy now pay later',
        },
      },
      additionalPartners: '+16 additional partners',
      privacyPolicies: 'Privacy Policies',
      savedUserCardsListForm: {
        addOtherCard: 'Enter your credit or debit card details',
        buttonDescription: 'Make payment',
        cardDescription: '{{type}} card with ending <bold> **** {{lastDigits}} </bold>',
        limitOfSavedCardsPerUserWarning: 'You have reached the maximum number of cards you can register',
        type: {
          credit: 'Credit',
          debit: 'Debit',
        },
      },
      selectPaymentMethod: 'Charge and pay online',
      breadcrumbs: {
        paymentMethods: 'Payment methods',
        shippingContactInfo: 'Shippment Info',
        congrats: 'Congrats!',
      },
      noPaymentMethodsMessage:
        'The payment methods are not available for processing the payment. Please contact the merchant',
      selectPaymentMethodValidation: 'Select a payment method',
      selectPaymentMethodValidationOnly: 'Payment method',
      customerInfoTile: 'enter your information',
      moreList: 'and 20+ ...',
      shippingForm: {
        labelTexts: {
          shippingContact: {
            address: {
              city: 'City',
              postalCode: 'Zip Code',
              state: 'State',
              street1: 'Street',
              street2: 'County',
            },
            phone: 'Phone (optional)',
          },
        },
        title: 'Where would you like to receive your product(s)?',
        personalInformationSectionTitle: 'Personal information',
        shippingSectionTitle: 'Shipping information',
      },
      descriptionBnpl:
        'Buy today and pay later in installments,\nwithout the need for a credit card.\n\nBy clicking "Finish" you will be redirected to Nelo where you can request your financing.\nTo use this payment method you need to have a card debit.',
    },
    confirmation: {
      banktransfer: {
        title: 'Transfer from your online banking to this Interbank CLABE to complete your purchase.',
        amount: 'Total amount',
        buyer: 'Name',
        company_name: 'Company',
        number_order: 'Order number',
        payment_method: {
          first: 'payment_method',
          second: 'Transfer payment',
        },
        reason_payment: 'Payment',
        payment_reference: 'Interbank CLABE',
        shipping_address: 'Shipping address',
        payment_expirate_at: 'Payment expires at',
        success_description: {
          first: 'Your reference for',
          second: ' the amount of ',
          three: ' weights has been successfully created. You only have to pay it to finish the purchase.',
        },
        success_title: 'Reference successfully generated',
        redirection_message: 'You will be redirected in ',
        copy_reference: 'Copy number',
        payment: 'Payment',
      },
      bnpl: {
        amount: 'Total amount',
        success_amount: 'Total amount',
        buyer: 'Buyer',
        company_name: 'Company name',
        failure_title: 'Your payment has not been completed successfully',
        number_order: 'Order number',
        payment_method: 'Payment method',
        payment_method_text: 'Deferred payment',
        shipping_address: 'Shipping address',
        success_description: {
          first: 'Your purchase in',
          second: ' the amount of ',
          three: ' pesos has been successfully completed.',
        },
        failure_description: {
          first: 'Your purchase for the amount of',
          second: " pesos hasn't been completed successfully.",
        },
        success_title: 'Reference successfully generated',
      },
      card: {
        amount: 'Total amount',
        buyer: 'Buyer',
        card_number: 'Credit card',
        reason_payment: 'Reason payment',
        card_saved: {
          error: 'There was an error saving your card data',
          success: 'Your card was saved successfully',
        },
        company_name: 'Company name',
        credit_type_info: 'Credit',
        debit_type_info: 'Debit',
        points: '...',
        intervalOptions: {
          half_month: 'biweekly',
          month: 'month',
          week: 'week',
          year: 'year',
        },
        monthlyInstallmentsInformation: 'Divided into {{monthlyInstallments}} installments of ',
        payment_method: 'Payment method',
        shipping_address: 'Shipping address',
        payment_method_card: 'The charge will be made to the card',
        subscription_info: {
          startInfo: 'The first charge will be made on the {{subscriptionStart}} day without completion.',
          startToEndInfo: 'The first charge will be made on the {{subscriptionStart}} ending on {{subscriptionEnd}}.',
          title: 'Subscription by {{amount}}/{{interval}}',
          trialInfo: 'Your trial period ends on {{trialEnd}}.',
        },
        subscription_success_title: 'Enjoy your subscription',
        success_title: 'Your payment was successful!',
        success_subtitle: 'You can close this window or <1>return to the site</1>',
        success_description: {
          first: 'Your purchase in',
          second: ' the amount of ',
          three: ' pesos has been successfully completed.',
          threeMonthlyInstallments:
            ' pesos has been successfully completed divided into {{monthlyInstallments}} installments of ',
        },
        declined_description: {
          first: 'Your purchase for the amount of',
          second: 'pesos has been rejected',
        },
        share: {
          title: 'Proof of payment',
          buttonsTitle: 'Share this proof of payment',
        },
      },
      cash: {
        amount: 'Total amount',
        buyer: 'Name',
        comission: '+$13.00 pesos per commission in OXXO',
        company_name: 'Company',
        number_order: 'Order number',
        reason_payment: 'Reason for payment',
        payment_expirate_at: 'Payment expires at',
        payment_method: {
          first: 'Payment method',
          second: 'Cash payment',
        },
        payment_reference: 'Payment reference',
        shipping_address: 'Shipping address',
        success_description: {
          first: 'Your reference for',
          second: ' the amount of ',
          three: ' weights has been successfully created. You only have to pay it to finish the purchase.',
        },
        list_items_datalogic: {
          first: 'Go to one of our Cash Payment points.',
          second: 'Mention that you will pay with <strong>Conekta</strong> cash.',
          three: 'Provide the cashier with the reference number and make your payment.',
        },
        list_items_oxxo: {
          first: 'Go to your nearest OXXO.',
          second: 'Mention that you will make a cash payment with OXXO Pay.',
          three: 'Make your payment.',
        },
        chains_pay_title: 'Chains where to pay',
        chains_pay:
          'Waldos, Eleczion, Farmacias San Francisco de Asis, FarmaTodo, Farmacias de Descuento Unión, Kiosko,' +
          ' Farmacias Bazar, Woolworth’s, Del Sol, Yepas, Alsúper.',
        chains_list: 'See list of chains',
        success_title: 'Successfully generated',
        copy_reference: 'Copy number',
        reference_number: 'Reference number',
        pay_title_datalogic: 'pay in more than 11 thousand points',
        pay_subtitle_datalogic: 'See map',
        pay_title_oxxo: 'pay in any oxxo',
        pay_title_pespay: 'pay in more than 6 thousand points',
      },
      common: {
        email_confirmation: 'We send your proof of payment to',
        reference_email_confirmation: 'We send your payment reference to',
        reference_confirmation_oxxo: 'We send the reference to your email with this information',
        share: {
          title: 'share this payment reference',
          label: 'Share:',
          fileShareName: 'Confirmation.png',
          whatsAppReferenceMessage:
            '*Your Conekta cash reference is ready!*%0A%0A' +
            'Hello! I share with you the details of my purchase for *{{amount}}*.%0A%0A' +
            'The reference number is ```{{reference}}```.%0A' +
            'Concept: ```{{concept}}```.%0A%0A' +
            '¡Regards!%0A%0A' +
            '_Powered by Conekta_',
          whatsAppPaymentConfirmationMessage:
            '*¡Payment Confirmed!*%0A%0A' +
            'Hello! I share with you the payment details of my purchase for *{{amount}}*.%0A%0A' +
            'The payment order is ```{{reference}}```.%0A' +
            'Concept: ```{{concept}}```.%0A%0A' +
            '¡Regards!%0A%0A' +
            '_Powered by Conekta_',
          tooltipemail: 'Share by E-mail',
          tooltipwhatsapp: 'Share by WhatsApp',
          tooltipshare: 'Share on other media',
          tooltipcontent_copy: 'Copy to clipboard',
          email: 'Email',
          whatsapp: 'WhatsApp',
          print: 'Print',
          modal: {
            title: 'Share your payment information',
            reference_title: 'Share your payment reference',
            subtitle: 'Enter the email address to which you want us to send the proof of payment',
            reference_subtitle: 'Enter the email address to which you want us to send the payment reference',
            inputLabel: 'Email address',
            error: 'Must be a valid Email address',
            buttonCancel: 'Cancel',
            buttonSubmit: 'Send Email',
          },
        },
      },
      header: {
        reference_title: 'Payment reference for',
        paymentWith: {
          banktransfer: 'Payment reference',
          bnpl: '',
          card: 'Successful payment',
          cash: 'Payment reference',
        },
        paymentDeclined: 'Payment declined',
      },
      redirection_message: {
        information:
          'In <strong>{{seconds}} seconds</strong> you will be redirected to {{company}}<br>If you dont want to wait, ',
        clic: 'click here',
      },
    },
    typePaymentLink: {
      payWithCash: 'Pay with cash',
      payWithCard: 'Pay with card',
      payWithTransfer: 'Pay with tranfer',
    },
    tokenizer: {
      error: 'A problem occurred, please try again',
      ourCompany: 'our company',
    },
    linkToWebsite: '¿What is Conekta?',
    securePayments: 'Payments are secure and encrypted',
    expiredTitle: 'The checkout status is incorrect.',
  },
};
