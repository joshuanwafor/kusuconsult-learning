let database= require("./database")
let messageModule= require("./messages")
let accountModule= require("./account")

function main(){
    accountModule.createNewAccount("joshua", "+2349017283616", "password")
    accountModule.createNewAccount("adams", "+234901728361", "password")
    messageModule.sendMessage("joshua", "password", "adams", "Message goes here")
    console.log(database)
}


main()

