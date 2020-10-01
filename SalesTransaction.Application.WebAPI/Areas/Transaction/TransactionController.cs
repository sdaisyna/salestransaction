using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SalesTransaction.Application.Model.Transaction;
using SalesTransaction.Application.Service.Transaction;
using SalesTransaction.Application.WebApi.Areas.Base;

namespace SalesTransaction.Application.WebAPI.Areas.Transaction
{
    public class TransactionController : BaseController
    {
        private ITransactionService _transactionService;

        public TransactionController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpGet]
        public IActionResult AllTransactionDetail()
        {
            try
            {
                dynamic jsonString = _transactionService.GetAllTransactionDetail();
                return Ok(jsonString);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public IActionResult AddTransaction([FromBody] MvTransaction transaction)
        {
            try
            {
                var added = _transactionService.AddTransaction(transaction);
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

    }
}
