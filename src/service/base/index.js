/* eslint-disable no-unused-vars */
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
   * @param {*} id the specific id of the resource
   * @param {*} params
   * @returns {*} resource | throws error
   * @memberof BaseService
   */
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
   * @param {*} data the data needed to create a new resource
   * @param {*} params
   * @returns {*} resource | throws error
   * @memberof BaseService
   */
  create(data, ...params) {
    const { model } = this.service;

    return model
      .forge(data)
      .save()
      .then(result => {
        return result.toJSON();
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  /**
   * Replace an existing resource by its id with data
   * @param {*} id the specific id of the resource
   * @param {*} data the data needed to update the specified resource
   * @param {*} params
   * @returns {*} resource | throws error
   * @memberof BaseService
   */
  update(id, data, ...params) {
    const { model } = this.service;

    return model
      .forge({ id })
      .save(data)
      .then(result => {
        return result.toJSON();
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  /**
   * Merge new data into a resource given by the specified id
   * @param {*} id the specific id of the resource
   * @param {*} data the data needed to update the specified resource
   * @param {*} params
   * @returns {*} resource | throws error
   * @memberof BaseService
   */
  patch(id, data, ...params) {
    const { model } = this.service;

    return model
      .forge({ id })
      .save(data, { patch: true })
      .then(result => {
        return result.toJSON();
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  /**
   *Remove a resource by its id
   * @param {*} id
   * @param {*} params
   * @memberof BaseService
   * @returns {*} resource | throws error
   */
  remove(id, ...params) {
    const { model } = this.service;

    return model
      .forge({ id })
      .destroy()
      .then(result => {
        return result.toJSON();
      })
      .catch(error => {
        throw new Error(error);
      });
  }
}

export default BaseService;
