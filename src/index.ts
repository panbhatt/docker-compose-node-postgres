import express from "express";

const app = express();

const PORT = process.env.PORT ? process.env.PORT : 3000 ; 
console.log("PORT is = " + PORT); 

app.get("/", (req, res) => {
  console.log("Receive Request " + new Date()) ;
  res.send('NODE_ENV= '+ JSON.stringify(process.env));
});

const server = app.listen(PORT, () => {
  
  console.log("Started at http://localhost:%d\n", PORT);
});
