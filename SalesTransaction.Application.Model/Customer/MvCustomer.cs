using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SalesTransaction.Application.Model.Customer
{
    public class MvAddCustomer
    {
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string middleName { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string phoneNumber { get; set; }
        [Required]
        public string city { get; set; }
        [Required]
        public string state { get; set; }
        [Required]
        public int zipCode { get; set; }
    }


    public class MvEditCustomer
    {
        [Required]
        public string customerId { get; set; }
  
        public string firstName { get; set; }
 
        public string lastName { get; set; }
   
        public string middleName { get; set; }
 
        public string email { get; set; }
    
        public string phoneNumber { get; set; }

        public string city { get; set; }

        public string state { get; set; }
     
        public int zipCode { get; set; }
        public int insertPersonId { get; set; }
    }


}
