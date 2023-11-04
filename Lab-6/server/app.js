import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app=express();


const pool=mysql.createPool({
    connectionLimit:50,
    host:'localhost',
    user: 'root',
    password:'dhanya2003',
    database:'db2',
    debug: false,
    timezone : "+00:00"


});
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.static('Public'));
/*app.get("/",function(req,res){
    res.sendFile(__dirname+"/Public/out.html");
});
/*app.post("/",function(req,res){
    //const data= new FormData()
    res.send("Thanks!"+req.body.email);
    pool.query("insert into login(email,passwd,type) values (?,?,?)",[req.body.email,req.body.pass,req.body.type])
    res.end();
});
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.send("Thank you!!");
  });

*/

app.get("/p",function(req,res){
    pool.query("Select count(*) as count from outpass where status='Pending'",function(err,results){
        if(!err){
            res.send(results);
            
        }
        else{
            console.log("Error"+err);
        }
        
        
    })
    
   
});
app.get("/a",function(req,res){
    pool.query("Select count(*) as count from outpass where status='Approved'",function(err,results){
        if(!err){
            res.send(results);
            
        }
        else{
            console.log("Error"+err);
        }
        
        
    })
    
   
});
app.get("/e",function(req,res){
    pool.query("Select count(*) as count from outpass where status='Denied'",function(err,results){
        if(!err){
            res.send(results);
            
        }
        else{
            console.log("Error"+err);
        }
        
        
    })
    
   
});
app.get("/table/",function(req,res){
    pool.query("Select a.*, b.* from outpass a, student b where a.email=b.email order by type",function(err,results){
        if(!err){
            res.send(results);
            
        }
        else{
            console.log("Error"+err);
        }
        
        
    })
    
   
});

app.get("/table/a",function(req,res){
    pool.query("Select a.*, b.* from outpass a, student b where a.email=b.email and status='Approved'order by type",function(err,results){
        if(!err){
            res.send(results);
            
        }
        else{
            console.log("Error"+err);
        }
        
        
    })
    
   
});
app.get("/table/d",function(req,res){
    pool.query("Select a.*, b.* from outpass a, student b where a.email=b.email and status='Denied'order by type",function(err,results){
        if(!err){
            res.send(results);
            
        }
        else{
            console.log("Error"+err);
        }
        
        
    })
    
   
});
app.get("/table/p",function(req,res){
    pool.query("Select a.*, b.* from outpass a, student b where a.email=b.email and status='Pending'order by type",function(err,results){
    
        if(!err){
            
            res.send(results);
    
        }
        else{
            console.log("Error"+err);
        }
        
        
    })
    
   
});

app.get("/table/:outno",function(req,res){
    
    pool.query("Select a.*, b.* from outpass a, student b where a.email=b.email and a.out_no=?",[req.params.outno],function(err,results){
        if(!err){
            
            res.send(results);
            
        }
        else{
            console.log("Error"+err);
        }
        
        
    })
    
   
});


app.post("/", (req, res) => {
    pool.query("Select a.*, b.* from outpass a, student b where a.email=b.email and b.regno=? order by type",[req.body.search],function(err,results){
        if(!err){
            res.send(results);
            
        }
        else{
            console.log("Error"+err);
        }
    })
    
  });
  app.put("/d/:out_no", (req, res) => {
    pool.query("update outpass set status='Denied' where out_no=?",[req.params.out_no],function(err,results){
       
        if(err){
            console.log("Error"+err);
        }
        
    })
    
    
  });
  app.put("/a/:out_no", (req, res) => {
    pool.query("update outpass set status='Approved' where out_no=?",[req.params.out_no],function(err,results){
       
        if(err){
            console.log("Error"+err);
        }
        
    })
    
    
  });
  app.put("/app", (req, res) => {
    pool.query("update outpass set status='Approved' where status='Pending'",function(err,results){
       
        if(err){
            console.log("Error"+err);
        }
        
    })
    
    
  });

  app.put("/r/:out_no", (req, res) => {
   const keys=Object.keys(req.body);
    pool.query("update outpass set status='Denied', reason_denial=? where out_no=?",[keys[0], req.params.out_no],function(err,results){
       
        if(err){
            console.log("Error"+err);
        }
        
    })
    
    
  });


/*

app.patch("/:email",function(req){
    console.log(req.params);
    pool.query("update login set passwd=? where email =?",[req.body.pass,req.body.email]);
    console.log("Successfully done");
})
app.get("/",function(){
    
    pool.query("select * from login",function(results,err){
        if(!err){
            console.log(results);

        }
        else{
            console.log(err);
        }
    });
    
});*/
app.listen(5000,function(){
    console.log("Listening on 5000");
});

