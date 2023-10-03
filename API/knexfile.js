module.exports = {
    development: {
      client: 'postgresql',
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'myuser',
        password: 'mypassword',
        database: 'mydatabase',
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
  };