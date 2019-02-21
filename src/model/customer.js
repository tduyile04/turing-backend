import bookshelf from './bookshelf';

const Customer = bookshelf.Model.extend({
  tableName: 'customer'
});

export default Customer;
