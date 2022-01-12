// custom product route
module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/custom-products',
        handler: 'product.getAll',
        config: {
          policies: []
        },
      },
    ],
  };