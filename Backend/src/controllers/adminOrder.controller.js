const orderService = require("../services/orderService");

module.exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports.confirmOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await orderService.confirmOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports.shipOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await orderService.shipOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports.deliverOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await orderService.deliverOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports.cancelOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await orderService.cancelOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports.deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await orderService.deleteOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
