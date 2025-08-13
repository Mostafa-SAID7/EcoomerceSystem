using BikeStores.Data;
using BikeStores.Method;

namespace BikeStores
{
    public static class TaskDispatcher
    {
        public static void Execute(int choice, BikeStoresContext context)
        {
            switch (choice)
            {
                case 1:
                    CustomerTasks.ListCustomers(context);
                    break;
                case 2:
                    OrderTasks.OrdersByStaff(context);
                    break;
                case 3:
                    ProductTasks.ProductsInMountainBikes(context);
                    break;
                case 4:
                    StoreTasks.TotalOrdersPerStore(context);
                    break;
                case 5:
                    OrderTasks.PendingOrders(context);
                    break;
                case 6:
                    CustomerTasks.CustomerOrderCount(context);
                    break;
                case 7:
                    ProductTasks.NeverOrderedProducts(context);
                    break;
                case 8:
                    ProductTasks.LowStockProducts(context);
                    break;
                case 9:
                    ProductTasks.FirstProduct(context);
                    break;
                case 10:
                    ProductTasks.ProductsByModelYear(context);
                    break;
                case 11:
                    ProductTasks.ProductOrderCounts(context);
                    break;
                case 12:
                    ProductTasks.ProductCountInCategory(context);
                    break;
                case 13:
                    ProductTasks.AverageListPrice(context);
                    break;
                case 14:
                    ProductTasks.ProductById(context);
                    break;
                case 15:
                    ProductTasks.ProductsOrderedMoreThan3(context);
                    break;
                case 16:
                    StaffTasks.StaffOrderCounts(context);
                    break;
                case 17:
                    StaffTasks.ActiveStaffMembers(context);
                    break;
                case 18:
                    ProductTasks.ProductsWithBrandCategory(context);
                    break;
                case 19:
                    OrderTasks.CompletedOrders(context);
                    break;
                case 20:
                    ProductTasks.ProductTotalQuantitySold(context);
                    break;
                default:
                    Console.WriteLine("Task not implemented yet.");
                    break;
            }
        }
    }
}
