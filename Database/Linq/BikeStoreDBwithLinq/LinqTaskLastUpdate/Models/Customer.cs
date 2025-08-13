using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("customers", Schema = "sales")]
    public class Customer
    {
        [Key]
        [Column("customer_id")]
        public int CustomerId { get; set; }

        [Required]
        [StringLength(255)]
        [Column("first_name")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(255)]
        [Column("last_name")]
        public string LastName { get; set; }

        [StringLength(25)]
        [Column("phone")]
        public string Phone { get; set; }

        [Required]
        [StringLength(255)]
        [Column("email")]
        public string Email { get; set; }

        [StringLength(255)]
        [Column("street")]
        public string Street { get; set; }

        [StringLength(50)]
        [Column("city")]
        public string City { get; set; }

        [StringLength(25)]
        [Column("state")]
        public string State { get; set; }

        [StringLength(5)]
        [Column("zip_code")]
        public string ZipCode { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}
