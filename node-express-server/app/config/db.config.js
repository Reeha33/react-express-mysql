module.exports = {
  HOST: "mysql-taskapp-reeha.mysql.database.azure.com", // This is your server building name
  USER: "dbuser", 
  PASSWORD: "Devops@123456789", 
  DB: "flexibleserverdb", // <-- CHANGE THIS BACK TO Azure's default database room!
  dialect: "mysql", 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
