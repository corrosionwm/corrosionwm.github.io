const express = require("express")
const app = express()
app.use(express.static("./"))
app.listen(3434, () => console.log("Listening on port 3434"))
// Simple server to make local dev easier
