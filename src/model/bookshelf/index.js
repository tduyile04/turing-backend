import Bookshelf from 'bookshelf';
import knex from '../../config';

const bookshelf = Bookshelf(knex);

bookshelf.plugin('pagination');

export default bookshelf;
