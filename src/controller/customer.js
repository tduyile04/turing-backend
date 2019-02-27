/* eslint-disable no-console */
/* eslint-disable require-jsdoc */
import BaseService from '../service/base';
import { Customer } from '../model';
/**
 * Customer controller class that interfaces with the network request
 * and handles it with the right request
 *
 * @class CustomerController
 */
class CustomerController {
  constructor(service) {
    this.controller = {};
    this.controller.service = service;
  }

  /**
   * Fetches all customers from the database
   * @param {object} req The request object
   * @param {object} res The response object.
   * @returns {object} The list of customer details
   */
  fetchAllCustomer = (req, res) => {
    const { limit, offset } = req.query;
    const { service: customerService } = this.controller;
    customerService
      .find(limit, offset)
      .then(result => {
        res.json({
          status: 200,
          data: result
        });
      })
      .catch(error => {
        res.json({
          status: 500,
          message: error.message
        });
      });
  };
}

const customerModel = new BaseService(Customer);

export default new CustomerController(customerModel);
