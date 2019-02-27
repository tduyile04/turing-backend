/* eslint-disable no-console */
/* eslint-disable require-jsdoc */

class BaseService {
  constructor(model) {
    this.service = {};
    this.service.model = model;
  }

  /**
   * Get a list of all the resources attached to a specific
   * model
   * @param {*} params contains the limit and the offset
   * @returns {*} list of reesources | throws error
   * @memberof BaseService
   */
  find(...params) {
    const { model } = this.service;
    const [limit, offset] = params;
    let fetch;

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

  /**
   * Gets a single resource for the specified model
   * @param {*} id
   * @param {*} params
   * @returns {*} resource | throws error
   * @memberof BaseService
   */
  // eslint-disable-next-line no-unused-vars
  get(id, ...params) {
    const { model } = this.service;

    return model
      .forge({ id })
      .fetch()
      .then(result => {
        return result.toJSON();
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  /**
   * Create a new resource based on the specified model
   *
   * @param {*} data
   * @param {*} params
   * @memberof BaseService
   */
  // eslint-disable-next-line no-unused-vars
  create(data, ...params) {
  }

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
