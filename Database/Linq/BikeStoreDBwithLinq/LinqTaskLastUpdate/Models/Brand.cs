using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("brands", Schema = "production")]
    public class Brand
    {
        [Key]
        [Column("brand_id")]
        public int BrandId { get; set; }

        [Required]
        [StringLength(255)]
        [Column("brand_name")]
        public string BrandName { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
