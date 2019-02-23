import bookshelf from './bookshelf';
import { Order } from '.';

const Tax = bookshelf.Model.extend({
  tableName: 'tax',
  order() {
    return this.hasOne(Order);
  }
});

export default Tax;
