let database = require("./database");

function createNewAccount(name, phone,password) {
    if (findAccount(name) == undefined) {
      let newAccount = {
        created_at: Date.now(),
        account_name: name,
        password: password,
        amount: 0,
        phone: phone
      };

      database.accounts.push(newAccount);
      console.log(" We created your account sucessfully");
      console.log("Please dont reveal your private key to anyone");
      return;
    }
    console.log("Someone already created an account with ", name);
    return;
  }

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



  
module.exports={
    findAccount: findAccount,
    createNewAccount: createNewAccount,
}  
    