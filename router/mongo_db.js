module.exports = function (app){


    app.post('/student/create',function(req,res){

        const dummyapi = require("../src/mongo_db/create_db") 
        dummyapi.main(req,res)
        
        })

}