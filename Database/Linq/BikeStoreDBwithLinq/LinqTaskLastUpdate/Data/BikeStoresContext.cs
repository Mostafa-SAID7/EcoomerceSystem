using Microsoft.EntityFrameworkCore;
using BikeStores.Models;

namespace BikeStores.Data
{
    public class BikeStoresContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Store> Stores { get; set; }
        public DbSet<Staff> Staffs { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Stock> Stocks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Database=BikeStores516;Trusted_Connection=True;Encrypt=False;");

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderItem>().HasKey(oi => new { oi.OrderId, oi.ItemId });
            modelBuilder.Entity<Stock>().HasKey(s => new { s.StoreId, s.ProductId });

            modelBuilder.Entity<Staff>()
                .HasOne(s => s.Manager)
                .WithMany(m => m.Subordinates)
                .HasForeignKey(s => s.ManagerId);
        }
    }
}
