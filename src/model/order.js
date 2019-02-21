import bookshelf from './bookshelf';

const Order = bookshelf.Model.extend({
  tableName: 'orders'
});

export default Order;
