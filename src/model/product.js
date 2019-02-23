import bookshelf from './bookshelf';
import { AttributeValue, Category, Customer, Review } from '.';

const Product = bookshelf.Model.extend({
  tableName: 'product',
  attributeValue() {
    return this.belongsToMany(AttributeValue);
  },
  category() {
    return this.belongsToMany(Category);
  },
  customer() {
    return this.hasOne(Customer);
  },
  review() {
    return this.hasMany(Review);
  }
});

export default Product;
