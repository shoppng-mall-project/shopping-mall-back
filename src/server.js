import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./api";  

const app = express();
const PORT=3000;

//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


//routing
app.use("/api", api);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

