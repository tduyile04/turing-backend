import bookshelf from './bookshelf';
import { Order, Review, ShippingRegion } from '.';

const Customer = bookshelf.Model.extend({
  tableName: 'customer',
  order() {
    return this.hasMany(Order);
  },
  shippingRegion() {
    return this.belongsTo(ShippingRegion);
  },
  review() {
    return this.hasMany(Review);
  }
});

export default Customer;
