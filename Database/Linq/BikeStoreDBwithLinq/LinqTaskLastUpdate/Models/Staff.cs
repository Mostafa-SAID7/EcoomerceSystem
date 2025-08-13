using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BikeStores.Models
{
    [Table("staffs", Schema = "sales")]
    public class Staff
    {
        [Key]
        [Column("staff_id")]
        public int StaffId { get; set; }

        [Required]
        [StringLength(50)]
        [Column("first_name")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        [Column("last_name")]
        public string LastName { get; set; }

        [Required]
        [StringLength(255)]
        [Column("email")]
        public string Email { get; set; }

        [StringLength(25)]
        [Column("phone")]
        public string Phone { get; set; }

        [Column("active")]
        public bool Active { get; set; }

        [Column("store_id")]
        public int StoreId { get; set; }

        [Column("manager_id")]
        public int? ManagerId { get; set; }

        public Store Store { get; set; }
        public Staff Manager { get; set; }
        public ICollection<Staff> Subordinates { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
