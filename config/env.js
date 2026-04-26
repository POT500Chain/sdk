require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  rpc: process.env.RPC_URL
};
