# 🚴‍♂️ Erra BikeStores DB with LINQ Tasks

A complete C# Console Application using **Entity Framework Core** to interact with the **BikeStores Sample Database**. The application offers 20 LINQ-based queries (Tasks) organized in a clean modular structure.

---

## 📂 Project Structure
```
/Data
└── BikeStoresContext.cs -- EF Core DbContext Configuration
/Method
├── CustomerTasks.cs -- Customer related LINQ tasks
├── OrderTasks.cs -- Order related LINQ tasks
├── ProductTasks.cs -- Product related LINQ tasks
├── StaffTasks.cs -- Staff related LINQ tasks
└── StoreTasks.cs -- Store related LINQ tasks
Program.cs -- Main Entry Point
Menu.cs -- Menu Display & Input Handling
TaskDispatcher.cs -- Routes Task Number to Method
```
---

## 🗄️ Database Setup (BikeStores)
1. Download the **BikeStores Sample Database Scripts**:
   - [BikeStores - Create Objects SQL](https://github.com/akhilome/BikeStores-Sample-Database/blob/master/sql-server/bike-stores.sql)
   - [BikeStores - Load Data SQL](https://github.com/akhilome/BikeStores-Sample-Database/blob/master/sql-server/bike-stores-data.sql)

2. Execute both scripts in **SQL Server Management Studio (SSMS)** to create and seed the database.

3. Update your **connection string** in `BikeStoresContext.cs`:
   ```csharp
   optionsBuilder.UseSqlServer("Server=YOUR_SERVER_NAME;Database=BikeStores;Trusted_Connection=True;TrustServerCertificate=True;");

##### ▶️ Run The App
- Open the project in Visual Studio.
- Ensure EF Core Packages are installed:
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.SqlServer
- Run the application.

You'll see a Menu with 20 Tasks to explore BikeStores data using LINQ.

## 📝 Features Implemented
##### Full DBContext Mapping with Data Annotations

20 LINQ Tasks including:
- List Customers, Orders, Products, Staffs
- Advanced Filters (By Category, Year, Quantity, etc.)
- Aggregations (Count, Sum, Average)
- Dynamic Menus for user selections
- Modular Task Architecture (Clean Separation of Concerns)

## 📊 Example Tasks
Task No.	Description
- 1	List all customers' names and emails
- 3	List all products in 'Mountain Bikes' category
- 10	Filter products by dynamic Model Year selection
- 15	Show products ordered with quantity > 3
- 20	Show total quantity sold per product

## 🧪 Test Data for Task 15 (Products Ordered > 3)
To ensure Task 15 displays results, you can insert test data into sales.order_items table:
```
INSERT INTO sales.order_items (order_id, item_id, product_id, quantity, list_price, discount)
VALUES (1, 99, 1, 5, 999.99, 0);
```
##### 📌 Notes
- Compatible with SQL Server Express / Developer Edition.
- Built with EF Core Code-First to Existing DB approach.
- Supports extensibility to add more complex LINQ scenarios.

## 📚 Author
Mostafa Said
GitHub: @Mostafa-SAID7
