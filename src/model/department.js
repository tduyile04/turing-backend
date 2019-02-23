import bookshelf from './bookshelf';
import { Category } from '.';

const Department = bookshelf.Model.extend({
  tableName: 'department',
  category() {
    this.hasMany(Category);
  }
});

export default Department;
