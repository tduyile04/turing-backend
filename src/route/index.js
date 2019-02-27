import { CustomerController } from '../controller';

const routes = (router, app) => {
  app.use('/api/v1', router);
  router.route('/customers').get(CustomerController.fetchAllCustomer);

  router.route('/customer/:id').get(CustomerController.fetchCustomer);
};

export default routes;
