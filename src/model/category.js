import bookshelf from './bookshelf';

const Category = bookshelf.Model.extend({
  tableName: 'category'
});

export default Category;
