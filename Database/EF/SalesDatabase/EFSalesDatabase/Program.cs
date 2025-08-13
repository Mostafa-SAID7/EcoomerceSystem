using EFSalesDatabase.Data;
using EFSalesDatabase.Models;
using System;
using System.Linq;

namespace EFSalesDatabase
{
    class Program
    {
        static void Main(string[] args)
        {
            using var context = new SalesContext();
            DbSeeder.Seed(context); // Seed only once on fresh DB

            while (true)
            {
                Console.Clear();
                Console.WriteLine("=== Sales Database Menu ===");
                Console.WriteLine("1. List Products");
                Console.WriteLine("2. Add New Customer");
                Console.WriteLine("3. View Sales");
                Console.WriteLine("0. Exit");
                Console.Write("Select an option: ");

                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        ListProducts(context);
                        break;
                    case "2":
                        AddCustomer(context);
                        break;
                    case "3":
                        ViewSales(context);
                        break;
                    case "0":
                        return;
                    default:
                        Console.WriteLine("Invalid option. Press Enter to continue...");
                        Console.ReadLine();
                        break;
                }
            }
        }

        static void ListProducts(SalesContext context)
        {
            Console.Clear();
            Console.WriteLine("Available Products:");
            foreach (var product in context.Products)
            {
                Console.WriteLine($"- {product.Name}: {product.Quantity} units, ${product.Price} | {product.Description}");
            }
            Console.WriteLine("\nPress Enter to return to the menu.");
            Console.ReadLine();
        }

        static void AddCustomer(SalesContext context)
        {
            Console.Clear();
            Console.Write("Customer Name: ");
            string name = Console.ReadLine();

            Console.Write("Email: ");
            string email = Console.ReadLine();

            Console.Write("Credit Card Number: ");
            string cc = Console.ReadLine();

            var customer = new Customer
            {
                Name = name,
                Email = email,
                CreditCardNumber = cc
            };

            context.Customers.Add(customer);
            context.SaveChanges();

            Console.WriteLine("Customer added successfully. Press Enter to return to the menu.");
            Console.ReadLine();
        }

        static void ViewSales(SalesContext context)
        {
            Console.Clear();
            Console.WriteLine("Sales List:");

            var sales = context.Sales
                .Select(s => new
                {
                    Product = s.Product.Name,
                    Customer = s.Customer.Name,
                    Store = s.Store.Name,
                    Date = s.Date
                })
                .ToList();

            foreach (var sale in sales)
            {
                Console.WriteLine($"{sale.Date:d} - {sale.Product} sold to {sale.Customer} at {sale.Store}");
            }

            Console.WriteLine("\nPress Enter to return to the menu.");
            Console.ReadLine();
        }
    }
}
