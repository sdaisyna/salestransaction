using Microsoft.Extensions.Configuration;
using SalesTransaction.Application.DataAccess;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace SalesTransaction.Application.Service.Product
{
    public class ProductService : IProductService
    {
        private DataAccessHelper _dah;
        private readonly string _connectionString;
        private readonly int _commandTimeout;
        private IConfiguration _configuration;


        public ProductService(IConfiguration configuration)
        {
            _configuration = configuration;
            dynamic connectionString = _configuration.GetSection("ConnectionString");
            _connectionString = connectionString["DefaultConnection"];

            if(_connectionString != null)
            {
                _dah = new DataAccessHelper(_connectionString);
            }

            _commandTimeout = Convert.ToInt32(connectionString["CommandTimeout"]);
        }
        public dynamic GetAllProductDetail()
        {
            using (var con = _dah.GetConnection()) 
            {
                var cmd = con.CreateCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "SpAllProductDetailSel";
                cmd.CommandTimeout = _commandTimeout;

                using (SqlDataReader sqlrdr = cmd.ExecuteReader())
                {
                    try
                    {
                        if (sqlrdr.HasRows)
                        {
                            return _dah.GetJson(sqlrdr);
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
