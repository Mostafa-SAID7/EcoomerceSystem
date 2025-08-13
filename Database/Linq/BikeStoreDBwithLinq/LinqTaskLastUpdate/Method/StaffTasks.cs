using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using BikeStores.Data;

namespace BikeStores.Method
{
    public static class StaffTasks
    {
        public static void StaffOrderCounts(BikeStoresContext context)
        {
            var staffOrderCounts = context.Staffs
                .Include(s => s.Orders)
                .Select(s => new {
                    FullName = s.FirstName + " " + s.LastName,
                    OrdersProcessed = s.Orders.Count
                });

            foreach (var s in staffOrderCounts)
                Console.WriteLine($"{s.FullName}: {s.OrdersProcessed} orders");
        }

        public static void ActiveStaffMembers(BikeStoresContext context)
        {
            var activeStaffs = context.Staffs.Where(s => s.Active)
                .Select(s => new { s.FirstName, s.LastName, s.Phone });

            foreach (var s in activeStaffs)
                Console.WriteLine($"{s.FirstName} {s.LastName} - {s.Phone}");
        }
    }
}
