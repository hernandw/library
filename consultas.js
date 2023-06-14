const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  allowExitOnIdle: true,
});

/* const getData = async () => {
  const { rows } = await pool.query("SELECT NOW()");
    console.log(rows);
   
};

getData(); */



const getBooks = async () => {
    const {rows } = await pool.query('SELECT * FROM books')
    console.log(rows)
    return rows
}

const addBooks = async (title, author) => {

    const text = 'INSERT into books(title, author) values($1, $2)'
    const values = [title, author]
    const result = await pool.query(text, values)
    console.log(result)

}



module.exports = {
    getBooks,
    addBooks
}

