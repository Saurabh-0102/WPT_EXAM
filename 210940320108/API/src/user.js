const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const db = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptexam",
};

const createMessage = async (data) => {
  const connection = mysql.createConnection(db);
  await connection.connectAsync();
  const sql = `insert into messagetable (message) values (?)`;
  await connection.queryAsync(sql, [data.message]);
  connection.endAsync();
};

const getMessage = async () => {
  const connection = mysql.createConnection(db);
  await connection.connectAsync();
  const sql = `select * from messagetable`;
  const list = await connection.queryAsync(sql);
  console.log(list);
  return list;
};

data = {
  message: "Hello how are you",
};
module.exports = { createMessage, getMessage };
