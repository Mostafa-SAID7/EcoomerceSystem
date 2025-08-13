using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFSalesDatabase.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; }

        [MaxLength(80)]
        public string Email { get; set; }

        public string CreditCardNumber { get; set; }

        public ICollection<Sale> Sales { get; set; } = new HashSet<Sale>();
    }
}
