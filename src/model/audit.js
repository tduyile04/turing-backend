import bookshelf from './bookshelf';

const Audit = bookshelf.Model.extend({
  tableName: 'audit'
});

export default Audit;
