using SalesTransaction.Application.Model.Customer;
using System;
using System.Collections.Generic;
using System.Text;

namespace SalesTransaction.Application.Service.Customer
{
    public interface ICustomerService
    {
        dynamic GetAllCustomerDetail();

        bool AddCustomer(MvAddCustomer customer);

        bool EditCustomer(MvEditCustomer customer);
    }
}
