import bookshelf from './bookshelf';

const ProductAttribute = bookshelf.Model.extend({
  tableName: 'product_attribute'
});

export default ProductAttribute;
