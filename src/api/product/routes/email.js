// custom email route
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/sendemail',
        handler: 'product.sendEmail',
        config: {
          policies: []
        },
      },
    ],
  };