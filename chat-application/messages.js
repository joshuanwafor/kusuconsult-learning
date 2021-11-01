let database = require("./database");
let accountModule = require("./account");

function sendMessage(sender_name, sender_password, receiver, message) {
  let sendAccount = accountModule.findAccount(sender_name);
  let receiverAccount = accountModule.findAccount(receiver);
  if (sendAccount != undefined && sendAccount.password == sender_password) {
    let messageObj = {
      created_at: Date.now(),
      body: message,
      sender_name: sender_name,
      receiver_name: receiver,
    };

    database.messages.push(messageObj);
    console.log("Successfully sent message to reciever");
    console.log("sending mesasge to user ");

    let phone_number = receiverAccount.phone;

    sendTwilioMessage(sendAccount.phone, receiverAccount.phone, message);


  } else {
    console.log("Account does not exist or password is incorrect");
  }
}

function sendTwilioMessage(sender_phone, receiver_phone, message) {
  const accountSid ='AC111bacb72a9e4f3e6d90114be3720c22';
  const authToken = 'cdecb3731338d258f07e0d44ede89e29';
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: message,
      from: sender_phone,
      to: receiver_phone,
    })
    .then((message) => console.log(message.sid)).catch(v=>{
        console.log(v)
    });
}


module.exports={
    sendMessage: sendMessage
}
