import bookshelf from './bookshelf';
import { Audit, Shipping } from '.';

const Shiping = bookshelf.Model.extend({
  tableName: 'shiping',
  audit() {
    return this.hasOne(Audit);
  },
  shippingRegionId() {
    return this.belongsTo(Shipping);
  }
});

export default Shiping;
