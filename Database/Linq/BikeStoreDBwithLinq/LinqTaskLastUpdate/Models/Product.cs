using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("products", Schema = "production")]
    public class Product
    {
        [Key]
        [Column("product_id")]
        public int ProductId { get; set; }

        [Required]
        [StringLength(255)]
        [Column("product_name")]
        public string ProductName { get; set; }

        [Column("brand_id")]
        public int BrandId { get; set; }

        [Column("category_id")]
        public int CategoryId { get; set; }

        [Column("model_year")]
        public short ModelYear { get; set; }

        [Column("list_price")]
        public decimal ListPrice { get; set; }

        public Brand Brand { get; set; }
        public Category Category { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
        public ICollection<Stock> Stocks { get; set; }
    }
}
