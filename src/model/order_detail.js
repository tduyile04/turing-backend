import bookshelf from './bookshelf';

const OrderDetail = bookshelf.Model.extend({
  tableName: 'order_detail'
});

export default OrderDetail;
