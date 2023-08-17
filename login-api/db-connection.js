const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, result) => {
        if(error) {
            throw error;
        }

        res.status(200).json(result.rows);
    })
}

const createUser = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email], (error, results) => {
      if (error) {
        console.error(error);
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const name = req.body.name;
    const email = req.body.email;
  
    pool.query(
      `UPDATE users SET name = ${name}, email = ${email} WHERE id = ${id}`,
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
}