using EFSalesDatabase.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFSalesDatabase.Data
{
    public class SalesContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Store> Stores { get; set; }
        public DbSet<Sale> Sales { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.;Database=SalesDatabase;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Email should be non-Unicode
            modelBuilder.Entity<Customer>()
                .Property(c => c.Email)
                .IsUnicode(false);

            // Description default value (already set in model, but we ensure it in DB too)
            modelBuilder.Entity<Product>()
                .Property(p => p.Description)
                .HasDefaultValue("No description");

            // Date default value: GETDATE()
            modelBuilder.Entity<Sale>()
                .Property(s => s.Date)
                .HasDefaultValueSql("GETDATE()");
        }
    }
}
