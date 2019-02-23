import bookshelf from './bookshelf';
import { Order } from '.';

const OrderDetail = bookshelf.Model.extend({
  tableName: 'order_detail',
  order() {
    return this.belongsTo(Order);
  }
});

export default OrderDetail;
