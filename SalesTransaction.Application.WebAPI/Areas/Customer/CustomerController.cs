using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SalesTransaction.Application.Service.Customer;
using SalesTransaction.Application.WebApi.Areas.Base;

namespace SalesTransaction.Application.WebAPI.Areas.Customer
{
    public class CustomerController : BaseController
    {
        private ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        public IActionResult AllCustomerDetail()
        {
            try
            {
                dynamic jsonString = _customerService.GetAllCustomerDetail();
                return Ok(jsonString);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
