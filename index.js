const express= require("express")
const app = express();
app.use(express.static('./'))
app.listen(3434,(()=>{console.log("port 3434 :p")}))
//simple server to make local dev easier