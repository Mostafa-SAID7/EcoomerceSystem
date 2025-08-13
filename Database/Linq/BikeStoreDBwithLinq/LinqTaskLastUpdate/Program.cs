// Program.cs
using System;
using BikeStores.Data;
using LinqTaskLastUpdate;

namespace BikeStores
{
    class Program
    {
        static void Main(string[] args)
        {
            using var context = new BikeStoresContext();

            while (true)
            {
                Menu.Show();
                int choice = Menu.GetChoice();
                if (choice == 0) break;

                Console.Clear();
                Console.WriteLine($"Executing Task {choice}...");

                TaskDispatcher.Execute(choice, context);

                Console.WriteLine("\nPress Enter to return to Menu...");
                Console.ReadLine();
            }
        }
    }
}
