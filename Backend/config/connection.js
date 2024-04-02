  const mysql = require("mysql2/promise");
let connection;
const createConnection = async () => {
  if (connection) return connection;
connection = await mysql.createConnection({
  host: "localhost",
  port:"3306",
  user:"root",
    password:"",
    database:"freelancing"

  
  // host: "srv1190.hstgr.io",
  //   port:"3306",
  //   user:"u426733178_root",
  //   password:"Windows!@#$5678",
  //   database:"u426733178_freelancing"

    // host: "localhost",
    // port:"3306",
    // user:"root",
    // // password:"root",
    // password:"password",
    // database:"freelancing"

  });

  return connection;
};
const connect = async () => {
  try {
    const connection = await createConnection();
    if (connection) {
      console.log("Connected to Database");
    }
    // Use the connection object here
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
};
module.exports = { createConnection, connect };
