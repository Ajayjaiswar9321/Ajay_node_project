
async function main(req,res){
    // res.send('hello')
    const pg = require ('pg')
    const { Client } = pg
   
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
     
    await client.query('SELECT * from students where city ilike $1', [`%${city}%`],async function(err,data){
    
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