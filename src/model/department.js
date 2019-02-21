import bookshelf from './bookshelf';

const Department = bookshelf.Model.extend({
  tableName: 'department'
});

export default Department;
