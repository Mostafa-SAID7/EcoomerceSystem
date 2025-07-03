# 🔗 Relational Mapping: eCommerce ERD

This document outlines the **foreign key relationships** between tables in an eCommerce database, highlighting how entities are connected across the schema.

---

## 📘 Entity Relationships

### 🔹 `Users`
- `Users.user_id` → **Primary Key (PK)**

---

### 🔹 `Addresses`
- `Addresses.user_id` → `Users.user_id`  
  _(Each address is linked to a specific user)_

---

### 🔹 `Categories`
- `Categories.parent_id` → `Categories.category_id`  
  _(Self-referencing relationship for nested or hierarchical categories)_

---

### 🔹 `Products`
- `Products.category_id` → `Categories.category_id`
- `Products.seller_id` → `Users.user_id`  
  _(A user can act as a seller)_

---

### 🔹 `Carts`
- `Carts.user_id` → `Users.user_id`  
  _(Each user has a shopping cart)_

---

### 🔹 `Cart_Items`
- `Cart_Items.cart_id` → `Carts.cart_id`
- `Cart_Items.product_id` → `Products.product_id`  
  _(Products added to a cart)_

---

### 🔹 `Orders`
- `Orders.user_id` → `Users.user_id`
- `Orders.address_id` → `Addresses.address_id`  
  _(Shipping address associated with the order)_

---

### 🔹 `Order_Items`
- `Order_Items.order_id` → `Orders.order_id`
- `Order_Items.product_id` → `Products.product_id`  
  _(Details of products in an order)_

---

### 🔹 `Payments`
- `Payments.order_id` → `Orders.order_id`  
  _(Tracks payment against a placed order)_

---

### 🔹 `Shipments`
- `Shipments.order_id` → `Orders.order_id`  
  _(Handles delivery tracking information)_

---

### 🔹 `Reviews`
- `Reviews.product_id` → `Products.product_id`
- `Reviews.user_id` → `Users.user_id`  
  _(A user reviews a specific product)_

---

## 🗺️ Summary Mapping Table

| 🧱 Table        | 🔑 Foreign Key        | 🔗 References (Primary Key)        |
|----------------|-----------------------|------------------------------------|
| `Addresses`    | `user_id`             | `Users(user_id)`                   |
| `Categories`   | `parent_id`           | `Categories(category_id)`          |
| `Products`     | `category_id`         | `Categories(category_id)`          |
|                | `seller_id`           | `Users(user_id)`                   |
| `Carts`        | `user_id`             | `Users(user_id)`                   |
| `Cart_Items`   | `cart_id`             | `Carts(cart_id)`                   |
|                | `product_id`          | `Products(product_id)`             |
| `Orders`       | `user_id`             | `Users(user_id)`                   |
|                | `address_id`          | `Addresses(address_id)`            |
| `Order_Items`  | `order_id`            | `Orders(order_id)`                 |
|                | `product_id`          | `Products(product_id)`             |
| `Payments`     | `order_id`            | `Orders(order_id)`                 |
| `Shipments`    | `order_id`            | `Orders(order_id)`                 |
| `Reviews`      | `product_id`          | `Products(product_id)`             |
|                | `user_id`             | `Users(user_id)`                   |

---

## ✅ Notes
- All foreign keys are assumed to be **indexed** for faster joins and lookups.
- All entities use `id`-based primary keys to ensure uniqueness.
- This mapping supports **referential integrity** and enables **complex queries** across the system.

