using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using BikeStores.Data;

namespace BikeStores.Method
{
    public static class StoreTasks
    {
        public static void TotalOrdersPerStore(BikeStoresContext context)
        {
            var ordersPerStore = context.Orders
                .Include(o => o.Store)
                .GroupBy(o => o.Store.StoreName)
                .Select(g => new { StoreName = g.Key, OrdersCount = g.Count() });

            foreach (var store in ordersPerStore)
                Console.WriteLine($"{store.StoreName}: {store.OrdersCount} orders");
        }
    }
}
