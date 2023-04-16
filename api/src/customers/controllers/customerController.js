import mongoose from "mongoose";
import { CustomerSchema } from "../models/customerModel"; 

const Customer = mongoose.model("Customers", CustomerSchema);

export const addCustomer = (req, res) => {
  let newCustomer = new Customer(req.body);

  newCustomer.save((err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer);
  });
};

export const getCustomer = (req, res) => {
  Customer.find({}, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer);
  });
};

export const getCustomerWithID = (req, res) => {
  Customer.findById(req.params.customerID, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json(Customer);
  });
};

export const updateCustomer = (req, res) => {
  Customer.findOneAndUpdate(
    { _id: req.params.customerID },
    req.body,
    { new: true },
    (err, Customer) => {
      if (err) {
        res.send(err);
      }
      res.json(Customer);
    }
  );
};

export const deleteCustomer = (req, res) => {
  Customer.deleteOne({ _id: req.params.customerID }, (err, Customer) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted Customer" });
  });
};