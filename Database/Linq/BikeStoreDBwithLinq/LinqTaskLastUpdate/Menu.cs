// Menu.cs
using System;

namespace LinqTaskLastUpdate
{
    public static class Menu
    {
        public static void Show()
        {
            Console.Clear();
            Console.WriteLine("===== BikeStores LINQ Tasks =====");
            Console.WriteLine("1. List all customers' names and emails");
            Console.WriteLine("2. Orders processed by staff ID 3");
            Console.WriteLine("3. Products in 'Mountain Bikes' category");
            Console.WriteLine("4. Total orders per store");
            Console.WriteLine("5. Orders not shipped yet");
            Console.WriteLine("6. Customers and their order count");
            Console.WriteLine("7. Products never ordered");
            Console.WriteLine("8. Products with stock < 5");
            Console.WriteLine("9. First product");
            Console.WriteLine("10. Products by model year");
            Console.WriteLine("11. Product order counts");
            Console.WriteLine("12. Product count in category");
            Console.WriteLine("13. Average list price");
            Console.WriteLine("14. Product by ID");
            Console.WriteLine("15. Products ordered with quantity > 3");
            Console.WriteLine("16. Staff and orders processed");
            Console.WriteLine("17. Active staff members");
            Console.WriteLine("18. Products with brand and category");
            Console.WriteLine("19. Completed orders");
            Console.WriteLine("20. Products with total quantity sold");
            Console.WriteLine("0. Exit");
        }

        public static int GetChoice()
        {
            Console.Write("Select Task Number: ");
            var input = Console.ReadLine();
            if (int.TryParse(input, out int choice) && choice >= 0 && choice <= 20)
                return choice;

            Console.WriteLine("Invalid choice. Press Enter to try again...");
            Console.ReadLine();
            return -1;
        }
    }
}
