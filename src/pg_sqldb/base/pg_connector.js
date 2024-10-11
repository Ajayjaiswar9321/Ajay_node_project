const getpgconnection = async() =>{



    const pg = require ('pg')
    const { Client } = pg

     
    const client = new Client({
        user: 'sql_db',
        password: 'root',
        host: '127.0.0.1',
        port: 5432,
        database: 'rupesh_db',
    })
    await client.connect()
    return client()

}
module.expotrts = {
    getpgconnection:getpgconnection
}


