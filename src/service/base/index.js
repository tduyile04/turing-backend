/* eslint-disable no-console */
/* eslint-disable require-jsdoc */

class BaseService {
  constructor(model) {
    this.service = {};
    this.service.model = model;
  }

  // get a list of resources
  find(...params) {
    const { model } = this.service;
    let fetch;
    const [limit, offset] = params;

    if (limit && offset) {
      fetch = model.forge().fetchPage({ limit, offset });
    } else {
      fetch = model.forge().fetchAll();
    }
    return fetch
      .then(result => {
        return result.toJSON();
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  // //get a single resources
  // get(id, ...params) {
  // }

  // // create a new resource
  // create(data, ...params) {
  // }

  // // Replace an existing resource by its id with data
  // update(id, data, ...params) {
  // }

  // // Merge new data into a resource
  // patch(id, data, ...params) {
  // }

  // // Remove a resource by its id
  // remove(id, ...params) {
  // }
}

export default BaseService;
