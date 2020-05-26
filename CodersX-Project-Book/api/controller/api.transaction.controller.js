const Transaction = require("../../models/transactions.model")
module.exports.getAll = async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions)
}