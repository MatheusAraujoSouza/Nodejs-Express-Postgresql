const { Pool } = require('pg');

const pool = new Pool({
  user: 'myuser',
  password: 'mypassword',
  host: 'postgres',
  port: 5432,
  database: 'mydatabase',
});

class Database {
  async getUsers() {
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows;
  }

  async getUserById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  async addUser(user) {
    const query = 'INSERT INTO users (id, name, email) VALUES ($1, $2, $3)';
    await pool.query(query, [user.id, user.name, user.email]);
  }

  async updateUser(user) {
    const query = 'UPDATE users SET name = $2, email = $3 WHERE id = $1';
    await pool.query(query, [user.id, user.name, user.email]);
  }

  async deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = $1';
    await pool.query(query, [id]);
  }
}

module.exports = new Database();