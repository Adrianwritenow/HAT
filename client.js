const { Client } = require('pg');
const client = new Client({
  username: 'AdrianRodriguez',
  host: 'localhost',
  database: 'hatDb',
  password: '',
  port: 5432
});
client.connect();

module.exports = client;
