let database= require("./database")

// finds an account and returns its reference
// if account does not exist return undefined
function findAccount(name) {
    let account = database.accounts.find(function (item) {
      if (item.account_name == name) {
        return true;
      } else {
        return false;
      }
    });
    return account;
  }
  
  // created new account using name and privatekey
  // if an account already exists, operation fails
  function createNewAccount(name, privateKey) {
    if (findAccount(name) == undefined) {
      let newAccount = {
        createdAt: Date.now(),
        account_name: name,
        privateKey: privateKey,
        amount: 0,
      };
      database.accounts.push(newAccount);
      console.log(" We created your account sucessfully");
      console.log("Please dont reveal your private key to anyone");
      return;
    }
  
    console.log("Someone already created an account with ", name);
    return;
  }
  
  // finds an account and funds it with given amount
  function fundAccount(accountName, amount) {
    let account = findAccount(accountName);
    if (account != undefined) {
      account.amount = amount + account.amount;
      console.log("funded account successfully");
      return;
    }
  }

module.exports={
  findAccount: findAccount,
  createNewAccount: createNewAccount,
  fundAccount: fundAccount
}  
  