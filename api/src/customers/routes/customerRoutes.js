import {
  addCustomer,
  deleteCustomer,
  getCustomer,
  getCustomerWithID,
  updateCustomer,
} from "../controllers/customerController";

const routes = (app) => {
  app
    .route("/customer")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getCustomer)
    .post(addCustomer);
  app
    .route("/customer/:customerID")
    .get(getCustomerWithID)
    .put(updateCustomer)
    .delete(deleteCustomer);
};

export default routes;
