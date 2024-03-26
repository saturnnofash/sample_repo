import express, { urlencoded} from "express";

const app = express();
app.use(express.json());
app.use(urlencoded({extended: false}));

app.use(express.static("static files"));

app.listen(3000, ()=> 
console.log("Listening on Port 3000..."));