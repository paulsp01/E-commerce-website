# E-commerce API Documentation

## Base URL

```
http://localhost:5000/api
```

## Authentication Endpoints

### Register User

```http
POST /auth/register
```

**Request Body:**

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response:**

```json
{
  "jwt": "your.jwt.token",
  "user": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    "role": "CUSTOMER",
    "address": [],
    "payment": [],
    "ratings": [],
    "reviews": [],
    "createdAt": "timestamp"
  },
  "message": "Register Successfully"
}
```

### Login User

```http
POST /auth/login
```

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response:**

```json
{
  "jwt": "your.jwt.token",
  "message": "Logged In Successfully"
}
```

## User Endpoints

### Get User Profile

```http
GET /users/profile
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "user_id",
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "role": "CUSTOMER",
  "address": [],
  "payment": [],
  "ratings": [],
  "reviews": [],
  "createdAt": "timestamp"
}
```

### Get All Users (Admin Only)

```http
GET /users
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
[
  {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    "role": "CUSTOMER",
    "address": [],
    "payment": [],
    "ratings": [],
    "reviews": [],
    "createdAt": "timestamp"
  }
  // ... more users
]
```

## Product Endpoints

### Create Product

```http
POST /products
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Request Body:**

```json
{
  "title": "Product Title",
  "color": "Product Color",
  "description": "Product Description",
  "discountedPrice": 100,
  "discountPersent": 10,
  "imageUrl": "http://example.com/image.jpg",
  "brand": "Product Brand",
  "price": 120,
  "size": "M",
  "quantity": 10,
  "topLevelCategory": "Category1",
  "secondLevelCategory": "Category2",
  "thirdLevelCategory": "Category3"
}
```

**Success Response:**

```json
{
  "_id": "product_id",
  "title": "Product Title",
  "color": "Product Color",
  "description": "Product Description",
  "discountedPrice": 100,
  "discountPersent": 10,
  "imageUrl": "http://example.com/image.jpg",
  "brand": "Product Brand",
  "price": 120,
  "size": "M",
  "quantity": 10,
  "category": "category_id",
  "createdAt": "timestamp"
}
```

### Get Product by ID

```http
GET /products/id/:id
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "product_id",
  "title": "Product Title",
  "color": "Product Color",
  "description": "Product Description",
  "discountedPrice": 100,
  "discountPersent": 10,
  "imageUrl": "http://example.com/image.jpg",
  "brand": "Product Brand",
  "price": 120,
  "size": "M",
  "quantity": 10,
  "category": {
    "_id": "category_id",
    "name": "Category3",
    "parentcategoty": "category2_id",
    "level": 3
  },
  "createdAt": "timestamp"
}
```

### Get All Products

```http
GET /products
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "content": [
    {
      "_id": "product_id",
      "title": "Product Title",
      "color": "Product Color",
      "description": "Product Description",
      "discountedPrice": 100,
      "discountPersent": 10,
      "imageUrl": "http://example.com/image.jpg",
      "brand": "Product Brand",
      "price": 120,
      "size": "M",
      "quantity": 10,
      "category": {
        "_id": "category_id",
        "name": "Category3",
        "parentcategoty": "category2_id",
        "level": 3
      },
      "createdAt": "timestamp"
    }
    // ... more products
  ],
  "currentPage": 1,
  "totalPages": 10
}
```

## Review Endpoints

### Create Review

```http
POST /reviews/create
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Request Body:**

```json
{
  "productId": "product_id",
  "review": "This is a review"
}
```

**Success Response:**

```json
{
  "_id": "review_id",
  "user": "user_id",
  "product": "product_id",
  "review": "This is a review",
  "createdAt": "timestamp"
}
```

### Get All Reviews for a Product

```http
GET /reviews/product/:productId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
[
  {
    "_id": "review_id",
    "user": {
      "_id": "user_id",
      "firstname": "John",
      "lastname": "Doe"
    },
    "product": "product_id",
    "review": "This is a review",
    "createdAt": "timestamp"
  }
  // ... more reviews
]
```

## Rating Endpoints

### Create Rating

```http
POST /ratings/create
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Request Body:**

```json
{
  "productId": "product_id",
  "rating": 5
}
```

**Success Response:**

```json
{
  "_id": "rating_id",
  "product": "product_id",
  "user": "user_id",
  "rating": 5,
  "createdAt": "timestamp"
}
```

### Get All Ratings for a Product

```http
GET /ratings/product/:productId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
[
  {
    "_id": "rating_id",
    "product": "product_id",
    "user": "user_id",
    "rating": 5,
    "createdAt": "timestamp"
  }
  // ... more ratings
]
```

## Order Endpoints

### Create Order

```http
POST /orders/create
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Request Body:**

```json
{
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
```

**Success Response:**

```json
{
  "_id": "order_id",
  "user": "user_id",
  "orderItems": [
    {
      "_id": "order_item_id",
      "price": 100,
      "product": "product_id",
      "quantity": 1,
      "size": "M",
      "discountedPrice": 90
    }
    // ... more order items
  ],
  "totalPrice": 100,
  "totalDiscountedPrice": 90,
  "discount": 10,
  "totalItem": 1,
  "shippingAddress": {
    "_id": "address_id",
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  },
  "createdAt": "timestamp"
}
```

### Place Order

```http
POST /orders/place/:orderId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "order_id",
  "orderStatus": "PLACED",
  "paymentDetails": {
    "status": "COMPLETED"
  },
  "createdAt": "timestamp"
}
```

### Confirm Order

```http
POST /orders/confirm/:orderId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "order_id",
  "orderStatus": "CONFIRMED",
  "createdAt": "timestamp"
}
```

### Ship Order

```http
POST /orders/ship/:orderId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "order_id",
  "orderStatus": "SHIPPED",
  "createdAt": "timestamp"
}
```

### Deliver Order

```http
POST /orders/deliver/:orderId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "order_id",
  "orderStatus": "DELIVERED",
  "createdAt": "timestamp"
}
```

### Cancel Order

```http
POST /orders/cancel/:orderId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "order_id",
  "orderStatus": "CANCELLED",
  "createdAt": "timestamp"
}
```

### Get User's Order History

```http
GET /orders/history/:userId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
[
  {
    "_id": "order_id",
    "user": "user_id",
    "orderItems": [
      {
        "_id": "order_item_id",
        "price": 100,
        "product": {
          "_id": "product_id",
          "title": "Product Title"
        },
        "quantity": 1,
        "size": "M",
        "discountedPrice": 90
      }
      // ... more order items
    ],
    "totalPrice": 100,
    "totalDiscountedPrice": 90,
    "discount": 10,
    "totalItem": 1,
    "shippingAddress": {
      "_id": "address_id",
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    },
    "orderStatus": "PLACED",
    "createdAt": "timestamp"
  }
  // ... more orders
]
```

### Get All Orders (Admin Only)

```http
GET /orders
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
[
  {
    "_id": "order_id",
    "user": "user_id",
    "orderItems": [
      {
        "_id": "order_item_id",
        "price": 100,
        "product": {
          "_id": "product_id",
          "title": "Product Title"
        },
        "quantity": 1,
        "size": "M",
        "discountedPrice": 90
      }
      // ... more order items
    ],
    "totalPrice": 100,
    "totalDiscountedPrice": 90,
    "discount": 10,
    "totalItem": 1,
    "shippingAddress": {
      "_id": "address_id",
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    },
    "orderStatus": "PLACED",
    "createdAt": "timestamp"
  }
  // ... more orders
]
```

### Delete Order

```http
DELETE /orders/:orderId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "message": "Order deleted successfully"
}
```

## Cart Endpoints

### Create Cart

```http
POST /carts/create
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "cart_id",
  "user": "user_id",
  "cartItem": [],
  "totalPrice": 0,
  "totalDiscountedPrice": 0,
  "discount": 0,
  "totalItem": 0,
  "createdAt": "timestamp"
}
```

### Find User Cart

```http
GET /carts/user/:userId
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Success Response:**

```json
{
  "_id": "cart_id",
  "user": "user_id",
  "cartItem": [
    {
      "_id": "cart_item_id",
      "product": {
        "_id": "product_id",
        "title": "Product Title"
      },
      "quantity": 1,
      "price": 100,
      "discountedPrice": 90
    }
    // ... more cart items
  ],
  "totalPrice": 100,
  "totalDiscountedPrice": 90,
  "discount": 10,
  "totalItem": 1,
  "createdAt": "timestamp"
}
```

### Add Cart Item

```http
POST /carts/add
```

**Headers:**

```
Authorization: Bearer your.jwt.token
```

**Request Body:**

```json
{
  "productId": "product_id",
  "size": "M"
}
```

**Success Response:**

```json
{
  "message": "item added to cart"
}
```

## Error Responses

### Validation Error

```json
{
  "errors": [
    {
      "msg": "Invalid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Authentication Error

```json
{
  "message": "Unauthorized"
}
```

### Server Error

```json
{
  "message": "Internal Server Error",
  "error": "Error details"
}
```

## Validation Rules

### Registration

- Email must be valid
- Firstname must be at least 3 characters
- Lastname must be at least 2 characters
- Password must be at least 6 characters

### Login

- Email must be valid
- Password must be at least 6 characters

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer your.jwt.token
```

The token is obtained after successful login or registration.
