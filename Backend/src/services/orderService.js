const cartService = require("./cart.service");
const addressModel = require("../models/address.model");
const orderItemModel = require("../models/orderItems.model");
const orderModel = require("../models/order.model");

module.exports.createOrder = async (user, shippingAddress) => {
  let address;
  try {
    let existingAddress = await addressModel
      .findOne({
        user: user._id, // Ensure the address belongs to the current user
        firstname: shippingAddress.firstname,
        lastname: shippingAddress.lastname,
        address: shippingAddress.address,
        city: shippingAddress.city,
        state: shippingAddress.state,
        zip: shippingAddress.zip,
        phone: shippingAddress.phone,
      })
      .lean();

    if (existingAddress) {
      address = existingAddress;
    } else {
      const newAdd = new addressModel(shippingAddress);
      newAdd.user = user;
      await newAdd.save();
      address = newAdd;
      user.address.push(newAdd._id);
      await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (let item of cart.cartItem) {
      const orderItem = await orderItemModel.create({
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        userId: item.userId,
        discountedPrice: item.discountedPrice,
      });

      // Populate product field
      await orderItem.populate('product');
      orderItems.push(orderItem);
    }

    const createdOrder = await orderModel.create({
      user,
      orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      discount: cart.discount,
      totalItem: cart.totalItem,
      shippingAddress: address,
    });

    return createdOrder;
  } catch (error) {
    console.error("Error in createOrder:", error);
    throw new Error(error.message);
  }
};

module.exports.placeOrder = async (orderId) => {
  const order = await this.findOrderById(orderId);
  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
};

module.exports.confirmOrder = async (orderId) => {
  const order = await this.findOrderById(orderId);
  order.orderStatus = "CONFIRMED";

  return await order.save();
};
module.exports.shipOrder = async (orderId) => {
  const order = await this.findOrderById(orderId);
  order.orderStatus = "SHIPPED";

  return await order.save();
};
module.exports.deliverOrder = async (orderId) => {
  const order = await this.findOrderById(orderId);
  order.orderStatus = "DELIVERED";

  return await order.save();
};

module.exports.cancelOrder = async (orderId) => {
  const order = await this.findOrderById(orderId);
  order.orderStatus = "CANCELLED";

  return await order.save();
};

module.exports.usersOrderHistory = async (userId) => {
  try {
   
    const orders = await orderModel
      .find({ user: userId, orderStatus: { $in: ["PLACED", "SHIPPED", "CONFIRMED","DELIVERED"] } })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getAllOrders = async () => {
  try {
    const orders = await orderModel
      .find()
      .populate({
      path: "orderItems",
      populate: {
        path: "product",
        model: "products",
        populate: {
        path: "category",
        model: "categories",
        },
      },
      })
      .populate("user").populate("shippingAddress")
      .lean();
    
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.deleteOrder = async (orderId) => {
  const order = await this.findOrderById(orderId);
  await orderModel.findByIdAndDelete(order._id);
};

module.exports.findOrderById = async (orderId) => {
  const order = await orderModel
    .findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
};
