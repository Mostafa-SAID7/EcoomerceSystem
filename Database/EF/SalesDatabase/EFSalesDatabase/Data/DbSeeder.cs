using EFSalesDatabase.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFSalesDatabase.Data
{
    public static class DbSeeder
    {
        public static void Seed(SalesContext context)
        {
            if (!context.Products.Any())
            {
                context.Products.AddRange(
                    new Product { Name = "Laptop", Quantity = 15, Price = 1500 },
                    new Product { Name = "Keyboard", Quantity = 40, Price = 45 },
                    new Product { Name = "Monitor", Quantity = 25, Price = 250 }
                );
            }

            if (!context.Customers.Any())
            {
                context.Customers.AddRange(
                    new Customer { Name = "Alice", Email = "alice@example.com", CreditCardNumber = "1234123412341234" },
                    new Customer { Name = "Bob", Email = "bob@example.com", CreditCardNumber = "1111222233334444" }
                );
            }

            if (!context.Stores.Any())
            {
                context.Stores.AddRange(
                    new Store { Name = "ElectroWorld" },
                    new Store { Name = "TechOutlet" }
                );
            }

            context.SaveChanges();

            if (!context.Sales.Any())
            {
                var product1 = context.Products.First();
                var customer1 = context.Customers.First();
                var store1 = context.Stores.First();

                context.Sales.AddRange(
                    new Sale
                    {
                        ProductId = product1.ProductId,
                        CustomerId = customer1.CustomerId,
                        StoreId = store1.StoreId
                        // Date is auto-set to GETDATE()
                    }
                );
            }

            context.SaveChanges();
        }
    }
}
