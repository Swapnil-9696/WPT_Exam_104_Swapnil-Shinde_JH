const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "chatapp",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `insert into user(msg) values(?)`;

  await connection.queryAsync(sql, [user.msg]);

  console.log("Connection ok..");
  await connection.endAsync();
}

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `select * from user`;
  const list = await connection.queryAsync(sql, []);

  await connection.endAsync();

  console.log(list);

  return list;
}

const user = { msg: "All the best.." };

addUser(user);
selectUser();

module.exports = { selectUser, addUser };
