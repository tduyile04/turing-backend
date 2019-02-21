import bookshelf from './bookshelf';

const ProductCategory = bookshelf.Model.extend({
  tableName: 'product_category'
});

export default ProductCategory;
