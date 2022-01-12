// path: ./src/api/restaurant/controllers/restaurant.js

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeEntity } = require("strapi-utils");

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom action
//   async exampleAction(ctx) {
//     try {
//       ctx.body = 'ok';
//     } catch (err) {
//       ctx.body = err;
//     }
//   },

  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }
    
    // Calling the default core action
    const { data, meta } = await super.find(ctx);
    // some more custom logic
    meta.date = Date.now()

    return { data, meta };
  },

  // Method 3: Replacing a core action adding manual call to shopify
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;
    const entity = await strapi.service('api::product.product').findOne(id, query);
    // get product details using shopify ID
    entity.shopify = await shopify.product.get(entity.shopifyID)
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  // custom function to send email usong sendgrid email service
  async sendEmail(ctx){
    await strapi.plugins['email'].services.email.send({
      to: ctx.request.body.email,
      from: 'prafull.shinde@nitorinfotech.com',
      subject: 'Use strapi email provider successfully',
      text: 'Hello world!',
    });
    return ctx.send('Email Sent')
  },
  // custom function to call product model data
 async getAll () {
    const entity = await strapi.service('api::product.product').find();
    return this.transformResponse(entity);
},
async findAll () {
    console.log('++++++++++++++++++++++++');
    const entity = await strapi.service('api::restaurant.restaurant').find();
    return this.transformResponse(entity);
}
}));
