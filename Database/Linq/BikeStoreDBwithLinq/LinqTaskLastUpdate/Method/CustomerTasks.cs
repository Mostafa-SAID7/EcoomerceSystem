using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using BikeStores.Data;

namespace BikeStores.Method
{
    public static class CustomerTasks
    {
        public static void ListCustomers(BikeStoresContext context)
        {
            var customers = context.Customers.Select(c => new { c.FirstName, c.LastName, c.Email });
            foreach (var c in customers)
                Console.WriteLine($"{c.FirstName} {c.LastName} - {c.Email}");
        }

        public static void CustomerOrderCount(BikeStoresContext context)
        {
            var customerOrdersCount = context.Customers
                .Include(c => c.Orders)
                .Select(c => new {
                    FullName = c.FirstName + " " + c.LastName,
                    OrdersCount = c.Orders.Count
                });

            foreach (var c in customerOrdersCount)
                Console.WriteLine($"{c.FullName}: {c.OrdersCount} orders");
        }
    }
}
