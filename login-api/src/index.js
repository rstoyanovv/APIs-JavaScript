import { pool } from './db.js';

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
    const password = req.body.password;
  
    pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id', [name, email, password], (error, results) => {
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

  const authenticateUser = (req, res) => {
    const { email, password } = req.body;

    pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {

        if (error) {
          throw error;
        }

        if (results.rows.length === 0) {
          res.status(401).json({ message: 'Authentication failed!' });
          
        } else {
          const user = results.rows[0];

          if (user.password === password) {
            res.status(200).json({ message: 'Authentication is successful!' });
          } else {
            res.status(401).json({ message: 'Authentication failed!' });
          }
        }
    });
};
  
export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    authenticateUser,
}
