import bookshelf from './bookshelf';
import { Audit, Customer, OrderDetail, Shipping, Tax } from '.';

const Order = bookshelf.Model.extend({
  tableName: 'orders',
  audit() {
    return this.hasOne(Audit);
  },
  customer() {
    return this.belongsTo(Customer);
  },
  shipping() {
    return this.belongsTo(Shipping);
  },
  tax() {
    return this.belongsTo(Tax);
  },
  orderDetail() {
    return this.hasOne(OrderDetail);
  }
});

export default Order;
