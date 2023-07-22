import express from "express";
import fs from "fs";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Morning!</h1>");
});

app.post("/siddhesh", (req, res) => {
  // fs.writeFile("user.txt", req, (error) => {
  //   if (error) throw error;
  //   console.log("user named " + res + " created successfully!");
  // });
  console.log("user named " + " created successfully!");
  res.sendStatus("201");
});

app.get("/user", (req, res) => {
  res.sendStatus("200");
});

app.put("/user", (req, res) => {
  res.sendStatus("200");
});

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
