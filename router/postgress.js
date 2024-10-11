module.exports = function (app){
app.get('/students/read',function(req,res){

const dummyapi = require("../src/pg_sqldb/query") 
dummyapi.main(req,res)

})
app.get('/students/create',function(req,res){

    const dummyapi = require("../src/pg_sqldb/insert") 
    dummyapi.main(req,res)
    
    })

    app.get('/students/update',function(req,res){

        const dummyapi = require("../src/pg_sqldb/update") 
        dummyapi.main(req,res)
        
        })
    
        app.get('/students/delete',function(req,res){

            const dummyapi = require("../src/pg_sqldb/delete") 
            dummyapi.main(req,res)
            
            })
        
            app.post('/students/search',function(req,res){

                const dummyapi = require("../src/pg_sqldb/employee_db/emloyeelst") 
                dummyapi.main(req,res)
                
                })




























































}


