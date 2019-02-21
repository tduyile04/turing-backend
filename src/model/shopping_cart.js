import bookshelf from './bookshelf';

const ShoppingCart = bookshelf.Model.extend({
  tableName: 'shopping_cart'
});

export default ShoppingCart;
