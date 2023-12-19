const express = require("express");

const app = express();

app.use(express.json());

app.get("/status", (req, res) => {
  res.status(200).json({ status: "Success", message: "API is running." });
});

app.get("/test", (req, res) => {
  res.status(200).json({ status: "Success", message: "API is running." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
