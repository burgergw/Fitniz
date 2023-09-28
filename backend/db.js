const sql = require('mssql');

const config = {
    user: 'SA',
    password: '110998Gw',
    server: 'localhost', // e.g., your-server-name.database.windows.net
    //Change database!!
    database: 'master',
    options: {
      encrypt: true, // For Azure SQL Database, set this to true
      trustServerCertificate: true // Add this line to trust self-signed certificates
    },
  };

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch((err) => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql,
  poolPromise,
};