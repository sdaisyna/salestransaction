using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SalesTransaction.Application.Model.Product
{
    public class MvAddProduct
    {   [Required]
        public string productName { get; set; }
        [Required]
        public string description { get; set; }
        [Required]
        public DateTime startDate { get; set; }
        [Required]
        public DateTime endDate { get; set; }
        [Required]
        public int rate { get; set; }
        [Required]
        public int insertPersonId { get; set; }



    }
}
