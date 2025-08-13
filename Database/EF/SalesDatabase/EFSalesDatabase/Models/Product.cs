using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFSalesDatabase.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        [Required, MaxLength(50)]
        public string Name { get; set; }

        public double Quantity { get; set; }

        [Required]
        public decimal Price { get; set; }

        public string Description { get; set; } = "No description";

        public ICollection<Sale> Sales { get; set; } = new HashSet<Sale>();
    }
}
