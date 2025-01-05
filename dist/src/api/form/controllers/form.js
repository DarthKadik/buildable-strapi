/**
 * form controller
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::form.form', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;
        const form = await strapi.db.query('api::form.form').findOne({
            where: { slug },
            populate: { form_fields: true },
        });
        return form ? { data: form } : ctx.notFound('Form not found');
    },
}));
