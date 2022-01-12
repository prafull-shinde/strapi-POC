// path: ./src/api/restaurant/controllers/restaurant.js

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeEntity } = require("strapi-utils");

module.exports =  ({
 
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
async getAll () {
    const entity = await strapi.service('api::restaurant.restaurant').find();
    // console.log(entity)
    return entity;
}
});
