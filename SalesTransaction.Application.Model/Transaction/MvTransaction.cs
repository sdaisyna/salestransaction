using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SalesTransaction.Application.Model.Transaction
{
    public class MvTransaction
    {
        [Required]
        public int customerId { get; set; }
        [Required]
        public int productId { get; set; }
        [Required]
        public int quantity { get; set; }
        [Required]
       public DateTime date { get; set; }
        public int insertpersonId { get; set; }

    }

    public class MvEditTransaction
    {
        [Required]
        public int salesTransactionId { get; set; }
        [Required]
        public int customerId { get; set; }
        [Required]
        public int productId { get; set; }
        [Required]
        public int quantity { get; set; }
        [Required]
        public int insertPersonId { get; set; }
    }
}
