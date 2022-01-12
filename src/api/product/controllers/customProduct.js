const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeEntity } = require("strapi-utils");
// }));

module.exports = {
    getAll () {
        return strapi.query('product').find()
    }
}