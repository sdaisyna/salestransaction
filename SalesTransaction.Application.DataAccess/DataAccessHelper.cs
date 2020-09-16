using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace SalesTransaction.Application.DataAccess
{
    public class DataAccessHelper
    {
        private SqlConnection _cn;
        private string _cnString;
        

        public DataAccessHelper(string connectionString)
        {
            _cnString = connectionString;
        }

        public SqlConnection GetConnection()
        {
            try
            {
                SetConnection();
                return _cn;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public void SetConnection()
        {
            _cn = new SqlConnection(_cnString);
            if(_cn.State ==ConnectionState.Closed)
            {
                _cn.Open();
            }
            else
            {
                _cn.Close();
                _cn.Open();
            }
        }

        public dynamic GetJson(SqlDataReader reader)
        {
            var dataTable = new DataTable();
            dataTable.Load(reader);

            if(dataTable.Rows[0] != null && dataTable.Rows[0]["Json"].ToString() !="")
                //coverting Json column of first row to Json
            {
                return JsonConvert.DeserializeObject(dataTable.Rows[0]["Json"].ToString());
            }
            else
            {
                return null;
            }
        }


    }
}
