import express from "express"

const app = express();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("Server is upp and running on port " + port);
});