import bookshelf from './bookshelf';
import { Customer, Shipping } from '.';

const ShippingRegion = bookshelf.Model.extend({
  tableName: 'shipping_region',
  customer() {
    return this.hasMany(Customer);
  },
  shipping() {
    return this.hasMany(Shipping);
  }
});

export default ShippingRegion;
