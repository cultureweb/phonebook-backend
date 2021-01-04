import express from "express";
const app = express();

// app config
const PORT = 3001;

// middlewares

// DB config

// api endpoints
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
