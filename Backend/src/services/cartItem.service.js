const userService = require("./user.service");
const cartItemModel = require("../models/cartItem.model");

module.exports.updateCartItem = async (userId, cartItemId, cartItemData) => {
    try {
        const item = await cartItemModel.findById(cartItemId);

        if (!item) {
            throw new Error("cart item is not found", cartItemId);
        }

        const user = await userService.findUserById(userId);
        if (!user) {
            throw new Error("user is not found", userId);
        }

        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        } else {
            throw new Error("you cannot update this cart item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports.removeCartItem = async (userId, cartItemId) => {
    try {
        const cartItem = await cartItemModel.findById(cartItemId);
        const user = await userService.findUserById(userId);

        if (user._id.toString() === cartItem.userId.toString()) {
            await cartItemModel.findByIdAndDelete(cartItemId);
        } else {
            throw new Error("you can't remove this cart item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

