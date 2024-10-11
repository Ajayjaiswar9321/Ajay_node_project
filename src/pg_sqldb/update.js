
async function main(req,res){
    // res.send('hello')
    const pg = require ('pg')
    const { Client } = pg
     var id = req.query.id
     var name = req.query.name
     var city = req.query.city

     
    const client = new Client({
        user: 'sql_db',
        password: 'root',
        host: '127.0.0.1',
      // host: 'localhost',
        port: 5432,
        database: 'rupesh_db',
    })
    await client.connect()
     
    // await client.query('Update into students(id,name,city) values($1,$2,$3)', [id,name,city],async function(err,data){
        await client.query('UPDATE students SET name = $2, city = $3 WHERE id = $1', [id, name, city], async function(err, data) {
    
        if(err){
            console.log(err)
            res.send(err)
            
        }
        else{
            res.send(data.rows)
            console.log(data)
    
        }
        await client.end() 
    })
 
    
     
     
    
    
    }
    module.exports =  {main}