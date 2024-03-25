const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Request Headers:", req.headers);
  next();
});

app.get("/", (req, res) => {
  const cookies = req.headers.cookie;
  if (cookies) {
    res.send("Cookies found in request headers.");
  } else {
    res.send("No cookies found in request headers.");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
