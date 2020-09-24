using SalesTransaction.Application.Model.Product;
using System;
using System.Collections.Generic;
using System.Text;

namespace SalesTransaction.Application.Service.Product
{
    public interface IProductService
    {
        bool AddProduct(MvAddProduct product);
        dynamic GetAllProductDetail();

    }
}
