using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("stores", Schema = "sales")]
    public class Store
    {
        [Key]
        [Column("store_id")]
        public int StoreId { get; set; }

        [Required]
        [StringLength(255)]
        [Column("store_name")]
        public string StoreName { get; set; }

        [StringLength(25)]
        [Column("phone")]
        public string Phone { get; set; }

        [StringLength(255)]
        [Column("email")]
        public string Email { get; set; }

        [StringLength(255)]
        [Column("street")]
        public string Street { get; set; }

        [StringLength(255)]
        [Column("city")]
        public string City { get; set; }

        [StringLength(10)]
        [Column("state")]
        public string State { get; set; }

        [StringLength(5)]
        [Column("zip_code")]
        public string ZipCode { get; set; }

        public ICollection<Staff> Staffs { get; set; }
        public ICollection<Order> Orders { get; set; }
        public ICollection<Stock> Stocks { get; set; }
    }
}
