using SalesTransaction.Application.Model.Transaction;
using System;
using System.Collections.Generic;
using System.Text;

namespace SalesTransaction.Application.Service.Transaction
{
    public interface ITransactionService
    {
        dynamic GetAllTransactionDetail();

        bool AddTransaction(MvTransaction transaction);
        bool EditTransaction(MvEditTransaction transaction);
    }
}
