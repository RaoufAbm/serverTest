const express = require("express");
const mysql=require("mysql2")
const app =express()
const port =2000





///////////////////////CNX SQL//////////////////
const db2 = mysql.createConnection({
  host: "91.134.151.72",
  user: "brzukxvw_STS",
  password: "6$bT~{h8PgAf",
  database: "brzukxvw_GSTS"
});
db2.connect((err)=>{
  if (err) throw err;  
  console.log(`kaboul 2`);
  });
///////////////////////////////////////////////


   app.get("/stations", (req, res) => {
    const sql = "SELECT * FROM Station "
    db2.query(sql,(err,data_)=>{
      if (err){
        return res.json(err);
      } 
      if (data_.length >0 ) {

        return res.json(data_);
      }else{
                return res.json("Failed");
            }
          })})



  //db
  // .authenticate()
  // .then(() => {
  //   console.log('Connection has been established successfully ');
  // })
  // .catch(err => {
  //   console.log('Unable to connect to the database:', err);
  // });

app.listen(port, () => { 
    console.log(`Server is running on portyes `);
  });




