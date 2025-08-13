using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("categories", Schema = "production")]
    public class Category
    {
        [Key]
        [Column("category_id")]
        public int CategoryId { get; set; }

        [Required]
        [StringLength(255)]
        [Column("category_name")]
        public string CategoryName { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
