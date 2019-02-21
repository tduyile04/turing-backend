import Bookshelf from 'bookshelf';
import knex from '../../config';

const bookshelf = Bookshelf(knex);

export default bookshelf;
