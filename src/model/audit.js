import bookshelf from './bookshelf';
import { Order } from '.';

const Audit = bookshelf.Model.extend({
  tableName: 'audit',
  order() {
    return this.belongsTo(Order);
  }
});

export default Audit;
