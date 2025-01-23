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
