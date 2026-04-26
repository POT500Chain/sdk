const transactionService = require("../services/transactionService");

exports.getStatus = (req, res) => {
  res.json({
    status: "Pot500 is running",
    trust: "Proof Of Trust Active"
  });
};

exports.createTransaction = async (req, res) => {
  try {
    const { from, to, amount } = req.body;

    const result = await transactionService.sendTransaction(from, to, amount);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
