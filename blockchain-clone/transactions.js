let accountsModule = require("./accounts")


// sends funds from senderAccount to receiverAccount
function transfer(senderAccount, receiverAccount, amount) {
    if (amount < senderAccount.amount) {
      senderAccount.amount = senderAccount.amount - amount;
      receiverAccount.amount = receiverAccount.amount + amount;
  
      let transaction = {
        type: "credit",
        fromAccount: senderAccount.account_name,
        toAccount: receiverAccount.account_name,
        amount: amount,
        createdAt: Date.now(),
        status: "completed",
      };
      transactions.push(transaction);
    } else {
      console.log(senderAccount)
      console.log("insufficient fund");
    }
  }
  
  // initiates transfer funds
  function transferFund(from, privatekey, to, amount) {
    let sendersAccount = accountsModule.findAccount(from);
    let receiversAccount = accountsModule.findAccount(to);
  
    if (sendersAccount !== undefined && receiversAccount !== undefined) {
      if (sendersAccount.privateKey == privatekey) {
        transfer(sendersAccount, receiversAccount,amount );
        console.log("Successfull");
      } else {
        console.log("provide valid id");
      }
    }else{
      console.log("Sender or Receiver does not exist")
    }
  }


module.exports={
    transfer: transferFund
}