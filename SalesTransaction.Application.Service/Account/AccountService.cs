﻿using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using SalesTransaction.Application.DataAccess;
using SalesTransaction.Application.Model.Account;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace SalesTransaction.Application.Service.Account
{
    public class AccountService : IAccountService
    {

        private DataAccessHelper _dah;
        private readonly int _commandTimeout;
        private readonly string _connectionString;
        private IConfiguration _configuration;


        public AccountService(IConfiguration configuration)
        {
            _configuration = configuration;

            dynamic connectionString = _configuration.GetSection("ConnectionString");
            _connectionString = connectionString["DefaultConnection"];

            if(_connectionString != null)
            {
                _dah = new DataAccessHelper(_connectionString);
            }

            _commandTimeout = Convert.ToInt32(connectionString["Commantimeout"]);
        }



        public dynamic GetLogin(MvLogin login)
        {
            using (var con = _dah.GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "SpUserSel";
                cmd.Parameters.AddWithValue("@UserName", login.UserName);
                cmd.Parameters.AddWithValue("@Password", login.Password);
                cmd.CommandTimeout = _commandTimeout;

                using (SqlDataReader sqldr = cmd.ExecuteReader())
                {
                    try
                    {
                        if (sqldr.HasRows)
                        {
                            return _dah.GetJson(sqldr);
                        }
                        else
                        {
                            return null;
                        }
                    }
                    catch(Exception ex)
                    {
                        throw ex;
                    }
                }


            }

        }

        public dynamic GetUserDetails(string json)
        {
           using (var con = _dah.GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandType = CommandType.StoredProcedure;
                dynamic jsonNew = JsonConvert.DeserializeObject(json);
                cmd.CommandText = "SpUserDetailsSel";
                cmd.Parameters.AddWithValue("@UserId", Convert.ToString(jsonNew.userId));
                cmd.CommandTimeout = _commandTimeout;


                using (SqlDataReader sqldr =cmd.ExecuteReader())
                {
                    try
                    {
                        if(sqldr.HasRows)
                        {
                            return _dah.GetJson(sqldr);
                        }
                        else
                        {
                            return null;
                        }
                    }
                    catch(Exception ex)
                    {
                        throw ex;
                    }
                }
            }
        }

        public dynamic GetAllUserDetail()
        {
            using (var con = _dah.GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                //dynamic jsonNew = JsonConvert.DeserializeObject(json);
                cmd.CommandText = "SpAllUserDetailSel";
                cmd.CommandTimeout = _commandTimeout;

                using (SqlDataReader sqldr = cmd.ExecuteReader())
                {
                    try
                    {
                        if (sqldr.HasRows)
                        {
                            return _dah.GetJson(sqldr);
                        }
                        else
                        {
                            return null;
                        }
                    }
                    catch(Exception ex)
                    {
                        throw ex;
                    }
                }


            }
        }
    }
}
