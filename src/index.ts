import express from "express";

const app = express();

app.use("/", (req, res) => {
  return res.json("Hello World!");
});

app.listen(8000, () => {
  console.clear();
  console.log("Server started on port 8000");
});
