
async function main(req,res){
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
    //  const id = req.query.id;
    //  const name = req.query.name;
    //  const city = req.query.city;
    //  const {getpgconnection} = require("../pg_sqldb/base/pg_connector")
    //  const client = await getpgconnection();
    //  console.log("client",client)

            await client.query('DELETE FROM students WHERE id = $1', [id], async function(err, data) {
    
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