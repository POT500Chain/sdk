const Web3 = require("web3");
require("dotenv").config();

const web3 = new Web3(process.env.RPC_URL);

exports.transfer = async (from, to, amount) => {
  // SIMULASI (belum real tx signing)
  return {
    from,
    to,
    amount,
    txHash: "0xSIMULATED_HASH",
    status: "pending"
  };
};
