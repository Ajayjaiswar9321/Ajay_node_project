
const pg = require('pg')
async function name(params) {
const { Client } = pg
 
const client = new Client({
  user: 'sql_db',
  password: 'root',
  host: '127.0.0.1',
// host: 'localhost',
  port: 5432,
  database: 'rupesh_db',
})

console.log(client)
    const result = await client.query('SELECT * from students', [])
    const insert = await client.query('insert into students values("ajay",1,"panvel")', [])
console.log("result = "+result)
console.log("result = "+insert)
}
name()
