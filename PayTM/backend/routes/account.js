const express = require("express");
const { authMiddleware } = require("../middlewares/middleware");
const { Account, User } = require("../db/db");
const { default: mongoose } = require("mongoose");

const accRouter = express.Router();

accRouter.get('/balance', authMiddleware, async (req, res) => {
  const userId = req.userId;
  // console.log(typeof userId, typeof new mongoose.Types.ObjectId(userId)); 
  const acc = await Account.findOne({userId: userId});
  // console.log(acc.balance);
  res.json({balance: acc.balance});
})

accRouter.post('/transfer', authMiddleware, async (req, res) => {
  try {
    const session = await mongoose.startSession();
  
    session.startTransaction();
    const {to, amount} = req.body;
  
    // const fromAccount = await Account.findById(req.userId).session(session);
    const fromAccount = await Account.findOne({userId: req.userId}).session(session);
    console.log(fromAccount.balance, req.userId);
    
    if(!fromAccount || fromAccount.balance < amount){
      await session.abortTransaction();
      return res.status(401).json({msg: "insufficient balance"});    
    }
  
    const toAccount = await Account.findOne({userId: to}).session(session);
    if(!toAccount){
      await session.abortTransaction();
      return res.status(401).json({msg: "invalid account"});
    }
  
    await Account.updateOne({userId: req.userId}, {$inc: {balance: -amount}}).session(session);
    await Account.updateOne({userId: to}, {$inc: {balance: amount}}).session(session);
  
    await session.commitTransaction();
    res.json({msg: "transfer successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "some error occur"});
  }
})
module.exports = {
  accRouter
}