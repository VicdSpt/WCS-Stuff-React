import express from "express";

const app = express();

const port = 3310;

app.get("/api/employees", (req, res) => {
  res.json({ message: "Hello Employees" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
