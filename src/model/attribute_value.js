import bookshelf from './bookshelf';
import { Attribute, Product } from '.';

const AttributeValue = bookshelf.Model.extend({
  tableName: 'attribute_value',
  attribute() {
    return this.belongsTo(Attribute);
  },
  product() {
    return this.belongsToMany(Product);
  }
});

export default AttributeValue;
