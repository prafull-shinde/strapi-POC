module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_KEY'),
        },
        settings: {
          defaultFrom: env('FROMEMAIL'),
          defaultReplyTo: env('FROMEMAIL')
        },
      },
    },
  });