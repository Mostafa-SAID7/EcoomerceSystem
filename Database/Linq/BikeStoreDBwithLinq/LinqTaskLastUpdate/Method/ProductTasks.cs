using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using BikeStores.Data;

namespace BikeStores.Method
{
    public static class ProductTasks
    {
        public static void ProductsInMountainBikes(BikeStoresContext context)
        {
            var mountainBikes = context.Products
                .Include(p => p.Category)
                .Where(p => p.Category.CategoryName == "Mountain Bikes");

            foreach (var p in mountainBikes)
                Console.WriteLine($"{p.ProductName} - {p.ListPrice:C}");
        }

        public static void NeverOrderedProducts(BikeStoresContext context)
        {
            var neverOrderedProducts = context.Products
                .Where(p => !p.OrderItems.Any());

            foreach (var p in neverOrderedProducts)
                Console.WriteLine($"{p.ProductName}");
        }

        public static void LowStockProducts(BikeStoresContext context)
        {
            var lowStockProducts = context.Stocks
                .Include(s => s.Product)
                .Where(s => s.Quantity < 5)
                .Select(s => new { s.Product.ProductName, s.Quantity });

            foreach (var s in lowStockProducts)
                Console.WriteLine($"{s.ProductName} - Quantity: {s.Quantity}");
        }

        public static void FirstProduct(BikeStoresContext context)
        {
            var firstProduct = context.Products.FirstOrDefault();
            Console.WriteLine(firstProduct != null ? $"First Product: {firstProduct.ProductName}" : "No Products Found");
        }

        public static void ProductsByModelYear(BikeStoresContext context)
        {
            while (true)
            {
                var availableYears = context.Products
                    .Select(p => p.ModelYear)
                    .Distinct()
                    .OrderByDescending(y => y)
                    .ToList();

                if (!availableYears.Any())
                {
                    Console.WriteLine("No model years found.");
                    break;
                }

                Console.WriteLine("Select Model Year:");
                for (int i = 0; i < availableYears.Count; i++)
                    Console.WriteLine($"{i + 1}. {availableYears[i]}");
                Console.WriteLine("0. Return to Main Menu");

                Console.Write("Enter choice number: ");
                if (int.TryParse(Console.ReadLine(), out int choice10))
                {
                    if (choice10 == 0) break;

                    if (choice10 >= 1 && choice10 <= availableYears.Count)
                    {
                        short selectedYear = availableYears[choice10 - 1];
                        var productsByYear = context.Products
                            .Where(p => p.ModelYear == selectedYear)
                            .ToList();

                        if (productsByYear.Any())
                        {
                            Console.WriteLine($"Products for Model Year {selectedYear}:");
                            foreach (var p in productsByYear)
                                Console.WriteLine($"{p.ProductName} - {p.ModelYear}");
                        }
                        else
                        {
                            Console.WriteLine("No products found for the selected year.");
                        }
                    }
                    else
                    {
                        Console.WriteLine("Invalid selection.");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid input. Try again.");
                }

                Console.WriteLine("\nPress Enter to choose another year or type '0' to return to Menu...");
                string backInput = Console.ReadLine();
                if (backInput == "0") break;
            }
        }

        public static void ProductOrderCounts(BikeStoresContext context)
        {
            var productOrderCounts = context.Products
                .Include(p => p.OrderItems)
                .Select(p => new { p.ProductName, OrderCount = p.OrderItems.Count });

            foreach (var p in productOrderCounts)
                Console.WriteLine($"{p.ProductName}: {p.OrderCount} orders");
        }

        public static void ProductCountInCategory(BikeStoresContext context)
        {
            while (true)
            {
                var availableCategories = context.Categories
                    .Select(c => c.CategoryName)
                    .Distinct()
                    .OrderBy(c => c)
                    .ToList();

                if (!availableCategories.Any())
                {
                    Console.WriteLine("No categories found.");
                    break;
                }

                Console.WriteLine("Select Category:");
                for (int i = 0; i < availableCategories.Count; i++)
                    Console.WriteLine($"{i + 1}. {availableCategories[i]}");
                Console.WriteLine("0. Return to Main Menu");

                Console.Write("Enter choice number: ");
                if (int.TryParse(Console.ReadLine(), out int choice12))
                {
                    if (choice12 == 0) break;

                    if (choice12 >= 1 && choice12 <= availableCategories.Count)
                    {
                        var selectedCategory = availableCategories[choice12 - 1];
                        var productCountInCategory = context.Products
                            .Include(p => p.Category)
                            .Count(p => p.Category.CategoryName == selectedCategory);

                        Console.WriteLine($"\n{selectedCategory} has {productCountInCategory} products.");
                    }
                    else
                    {
                        Console.WriteLine("Invalid selection.");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid input. Try again.");
                }

                Console.WriteLine("\nPress Enter to choose another category or type '0' to return to Menu...");
                string backInput = Console.ReadLine();
                if (backInput == "0") break;
            }
        }

        public static void AverageListPrice(BikeStoresContext context)
        {
            var avgListPrice = context.Products.Average(p => p.ListPrice);
            Console.WriteLine($"Average List Price: {avgListPrice:C}");
        }

        public static void ProductById(BikeStoresContext context)
        {
            Console.Write("Enter Product ID: ");
            if (int.TryParse(Console.ReadLine(), out int productId))
            {
                var product = context.Products.Find(productId);
                Console.WriteLine(product != null ? $"Product: {product.ProductName}" : "Product not found");
            }
            else
            {
                Console.WriteLine("Invalid Product ID");
            }
        }

        public static void ProductsOrderedMoreThan3(BikeStoresContext context)
        {
            var productsOrderedMoreThan3 = context.OrderItems
                .Include(oi => oi.Product)
                .Where(oi => oi.Quantity > 3)
                .Select(oi => new { oi.Product.ProductName, oi.Quantity })
                .ToList();

            if (productsOrderedMoreThan3.Any())
            {
                foreach (var p in productsOrderedMoreThan3)
                    Console.WriteLine($"{p.ProductName} - Quantity: {p.Quantity}");
            }
            else
            {
                Console.WriteLine("No products ordered with quantity > 3 found.");
            }
        }

        public static void ProductsWithBrandCategory(BikeStoresContext context)
        {
            var productsWithBrandCategory = context.Products
                .Include(p => p.Brand)
                .Include(p => p.Category)
                .Select(p => new { p.ProductName, p.Brand.BrandName, p.Category.CategoryName });

            foreach (var p in productsWithBrandCategory)
                Console.WriteLine($"{p.ProductName} - Brand: {p.BrandName} - Category: {p.CategoryName}");
        }

        public static void ProductTotalQuantitySold(BikeStoresContext context)
        {
            var productTotalQuantitySold = context.Products
                .Include(p => p.OrderItems)
                .Select(p => new
                {
                    p.ProductName,
                    TotalQuantity = p.OrderItems.Sum(oi => (int?)oi.Quantity) ?? 0
                });

            foreach (var p in productTotalQuantitySold)
                Console.WriteLine($"{p.ProductName}: {p.TotalQuantity} units sold");
        }
    }
}
