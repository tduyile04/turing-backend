import bookshelf from './bookshelf';
import { AttributeValue } from '.';

const Attribute = bookshelf.Model.extend({
  tableName: 'attribute',
  attribute_value() {
    return this.hasMany(AttributeValue);
  }
});

export default Attribute;
