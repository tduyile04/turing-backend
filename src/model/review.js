import bookshelf from './bookshelf';

const Review = bookshelf.Model.extend({
  tableName: 'review'
});

export default Review;
