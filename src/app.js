import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from BackendProject!!!</h1>")
})

export default app;