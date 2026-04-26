const blockchain = require("../core/blockchain");

exports.sendTransaction = async (from, to, amount) => {
  return await blockchain.transfer(from, to, amount);
};
