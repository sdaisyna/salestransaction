using System;
using Microsoft.AspNetCore.Mvc;
using SalesTransaction.Application.Model.Account;
using SalesTransaction.Application.Service.Account;
using SalesTransaction.Application.WebApi.Areas.Base;


namespace SalesTransaction.Application.WebApi.Areas.Account
{
    public class AccountController : BaseController
    {
        private IAccountService _as;

        public AccountController(IAccountService accountService)
        {
            _as = accountService;
        }

        [HttpPost]
        public IActionResult Login([FromBody] MvLogin login)
        {
            try
            {
                dynamic jsonString = _as.GetLogin(login);
                return Ok(jsonString);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [HttpGet]
        public IActionResult UserDetail(string json)
        {
            try
            {
                dynamic jsonString = _as.GetUserDetail(json);
                return Ok(jsonString);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}

