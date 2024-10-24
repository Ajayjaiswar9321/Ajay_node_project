const { MongoClient } = require('mongodb');
// const fs = require('fs');
function main(req, res) {
        const url = 'mongodb://localhost:27017';
        const client = new MongoClient(url);
        const dbName = 'student_db';
        const body = req.body

        async function main() {
                // Use connect method to connect to the server
                await client.connect();
                console.log('Connected successfully to server');
                const db = client.db(dbName);
                // // if (Array.isArray(body)) {
                //         db.collection('col_1').insertMany(req.body)
                // }
                // else  {
                        const collection = db.collection('col_1');
                        await db.collection('col_1').insertOne(req.body)
                // }

                //Many_-----------

                // db.collection('col_1').insertMany([
                    // {name: "nitesh", roll_no: 15},
                    // {name: "ajay", roll_no: 20},
                    // {name: "amish", roll_no: 25}
                // ]);

                //InsertOne--------------------


                //update------------------------------------



                //delete----------------------------------

                //upsert-----------------------------------


                //find--------------------------------------

                console.log('create')
                res.send('create');



                // db.collection('col_1').insertMany();

                // the following code examples can be pasted here...

                return 'done.';
        }
        main();
}
module.exports = {
        main
}