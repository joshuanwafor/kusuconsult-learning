// account structure address, firstname, amount, private_key
let accounts = [];
let transactions = [];

function findAccount(name) {
  let account = accounts.find(function (item) {
    if (item.account_name == name) {
      return true;
    } else {
      return false;
    }
  });
  return account;
}

function createNewAccount(name, privateKey) {
  if (findAccount(name) == undefined) {
    let newAccount = {
      createdAt: Date.now(),
      account_name: name,
      privateKey: privateKey,
      amount: 0,
    };
    accounts.push(newAccount);
    console.log(" We created your account sucessfully");
    console.log("Please dont reveal your private key to anyone");
    return;
  }

  console.log("Someone already created an account with ", name);
  return;
}

createNewAccount("default-account", "privatekey");
createNewAccount("joshua-account", "privatekey");

function fundAccount(accountName, amount) {
  let account = findAccount(accountName);
  if (account != undefined) {
    account.amount = amount + account.amount;
    console.log("funded account successfully");
    return;
  }
}

fundAccount("default-account", 100000000);

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

function transferFund(from, privatekey, to, amount) {
  let sendersAccount = findAccount(from);
  let receiversAccount = findAccount(to);

  if (sendersAccount !== undefined && receiversAccount !== undefined) {
    if (sendersAccount.privateKey == privatekey) {
      transfer(sendersAccount, receiversAccount,amount );
      console.log("Successfull");
    } else {
      console.log("provide valid id");
    }
  }
}

transferFund("default-account","privatekey", "joshua-account", 5);

console.log(accounts);
console.log(transactions);
