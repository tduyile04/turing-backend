import bookshelf from './bookshelf';
import { Department, Product } from '.';

const Category = bookshelf.Model.extend({
  tableName: 'category',
  department() {
    this.belongsTo(Department);
  },
  product() {
    return this.belongsToMany(Product);
  }
});

export default Category;
