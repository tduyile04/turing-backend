import bookshelf from './bookshelf';
import { Customer, Product } from '.';

const Review = bookshelf.Model.extend({
  tableName: 'review',
  customer() {
    return this.belongsTo(Customer);
  },
  product() {
    return this.belongsTo(Product);
  }
});

export default Review;
