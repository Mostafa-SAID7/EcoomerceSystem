using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("stocks", Schema = "production")]
    public class Stock
    {
        [Column("store_id")]
        public int StoreId { get; set; }

        [Column("product_id")]
        public int ProductId { get; set; }

        [Column("quantity")]
        public int Quantity { get; set; }

        public Store Store { get; set; }
        public Product Product { get; set; }
    }
}
