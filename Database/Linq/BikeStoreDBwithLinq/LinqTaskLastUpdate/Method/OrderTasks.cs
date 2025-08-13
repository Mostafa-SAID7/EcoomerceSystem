using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using BikeStores.Data;

namespace BikeStores.Method
{
    public static class OrderTasks
    {
        public static void OrdersByStaff(BikeStoresContext context)
        {
            var ordersByStaff3 = context.Orders.Where(o => o.StaffId == 3);
            foreach (var order in ordersByStaff3)
                Console.WriteLine($"Order ID: {order.OrderId} - Customer ID: {order.CustomerId}");
        }

        public static void PendingOrders(BikeStoresContext context)
        {
            var pendingOrders = context.Orders.Where(o => o.ShippedDate == null);
            foreach (var o in pendingOrders)
                Console.WriteLine($"Order ID: {o.OrderId} - Status: {o.OrderStatus}");
        }

        public static void CompletedOrders(BikeStoresContext context)
        {
            var completedOrders = context.Orders.Where(o => o.OrderStatus == 4);
            foreach (var o in completedOrders)
                Console.WriteLine($"Order ID: {o.OrderId} - Status: Completed");
        }
    }
}
