import bookshelf from './bookshelf';

const Product = bookshelf.Model.extend({
  tableName: 'product'
});

export default Product;
