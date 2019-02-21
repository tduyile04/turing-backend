/* eslint-disable func-names */

exports.up = function(knex) {
  return knex.schema.table('customer', t => {
    t.increments('customer_id')
      .unsigned()
      .primary();
    t.string('name').notNull();
    t.string('password').notNull();
    t.string('email').notNull();
    t.text('credit_card').notNull();
    t.string('address_1').nullable();
    t.string('address-2').nullable();
    t.string('city').nullable();
    t.string('region').nullable();
    t.string('postal_code').nullable();
    t.string('country').nullable();
    t.integer('shipping_region_id')
      .notNull()
      .defaultTo(1);
    t.string('day_phone').nullable();
    t.string('eve_phone').nullable();
    t.string('mob_phone').nullable();
    t.string('new_value').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('customer');
};
