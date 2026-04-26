const express = require("express");
const routes = require("./api/routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Pot500 running on port ${PORT}`);
});
