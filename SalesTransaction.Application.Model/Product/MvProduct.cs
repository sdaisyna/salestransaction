using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SalesTransaction.Application.Model.Product
{
    public class MvProduct
    {   [Required]
        public string ProductName { get; set; }
        [Required]
        public string Descriprion { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        [Required]
        public int Rate { get; set; }
        [Required]
        public int InsertPersonId { get; set; }



    }
}
