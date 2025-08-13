using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("order_items", Schema = "sales")]
    public class OrderItem
    {
        [Column("order_id")]
        public int OrderId { get; set; }

        [Column("item_id")]
        public int ItemId { get; set; }

        [Column("product_id")]
        public int ProductId { get; set; }

        [Column("quantity")]
        public int Quantity { get; set; }

        [Column("list_price")]
        public decimal ListPrice { get; set; }

        [Column("discount")]
        public decimal Discount { get; set; }

        public Order Order { get; set; }
        public Product Product { get; set; }
    }
}
