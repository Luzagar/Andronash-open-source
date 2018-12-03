const tmi = require('tmi.js')
const tmiConfig = {
    
    options: {
        debug: true
    },
    connection: {
        reconnect:  true
    },
    identity: {
        username: "",
        password: "oauth:"
    },
    channels: [
        ""
    ]
};
let bot = new tmi.client(tmiConfig);
bot.connect();
bot.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
    
});
const prefix = "!";
bot.on('chat', (channel, user, message, self) => {
    if(message === "")  {
        client.say(channel ," ")
        
            ; 
    }
});    
