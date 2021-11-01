let transactionsModule = require("./transactions");
function main(){
    console.log("Program starts here");
    transactionsModule.transfer("from","privatekey", "to", 500)
    console.log("Program ends here")
}




