using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("orders", Schema = "sales")]
    public class Order
    {
        [Key]
        [Column("order_id")]
        public int OrderId { get; set; }

        [Column("customer_id")]
        public int CustomerId { get; set; }

        [Column("order_status")]
        public byte OrderStatus { get; set; }

        [Column("order_date")]
        public DateTime OrderDate { get; set; }

        [Column("required_date")]
        public DateTime RequiredDate { get; set; }

        [Column("shipped_date")]
        public DateTime? ShippedDate { get; set; }

        [Column("store_id")]
        public int StoreId { get; set; }

        [Column("staff_id")]
        public int StaffId { get; set; }

        public Customer Customer { get; set; }
        public Store Store { get; set; }
        public Staff Staff { get; set; }

        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
