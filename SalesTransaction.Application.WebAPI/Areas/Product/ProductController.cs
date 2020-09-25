using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SalesTransaction.Application.Model.Product;
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

        [HttpPost]
        public IActionResult AddProduct([FromBody] MvAddProduct product)
        {
            try
            {
                var added = _productService.AddProduct(product);
                if (!added)
                {
                    return BadRequest();
                }
                return Ok();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        [HttpPost]
        public IActionResult EditProduct([FromBody] MvEditProduct product)
        {
            try
            {
                var edited = _productService.EditProduct(product);
                if (!edited)
                {
                    return BadRequest();
                }
                return Ok();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

    }
}
