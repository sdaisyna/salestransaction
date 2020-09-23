using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SalesTransaction.Application.Service.Product;
using SalesTransaction.Application.WebApi.Areas.Base;

namespace SalesTransaction.Application.WebAPI.Areas.Product
{
    public class ProductController : BaseController
    {
        private IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public IActionResult AllProductDetail()
        {
            try
            {
                dynamic jsonString = _productService.GetAllProductDetail();
                return Ok(jsonString);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
