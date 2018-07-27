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
        password: "oauth:""
    },
    channels: [
        "Nashray_"
    ]
};
let client = new tmi.client(tmiConfig);
client.connect();
client.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
    
});

const prefix = "!";





client.on('chat', (channel, user, message, self) => {
    if(message === "!discord")  {
        client.say("Nashray_" ," le discord de Nashray est ici: https://discord.me/nashray")
        
            ; 

    }
});    

client.on('chat', (channel, user, message, self) => {
    if(message === "!twitter")  {
        client.say("Nashray_" ,"Le twitter de NashRay est ici: https://twitter.com/_NashRay ")
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!clip 1")  {
        client.say("Nashray_" ,"https://clips.twitch.tv/AmusedGloriousRatRuleFive")
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!clip 2")  {
        client.say("Nashray_" ,"https://clips.twitch.tv/TrustworthyLazyCarrotArgieB8")
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!clip 3")  {
        client.say("Nashray_" ,"https://clips.twitch.tv/SpoopyOilyWebOhMyDog")
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!rules" && user.mod)  {
        client.say("Nashray_" ,"Les règles se trouvent  dans ce lien: https://pastebin.com/W9psU9x1")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        
            ; 

    }
});

client.on('chat', (channel, user, message, self) => {
    if(message === "!youtube")  {
        client.say("Nashray_" ,"La chaine youtube de Nashray est ici:https://www.youtube.com/channel/UCaqFLYrlA7p9tBa5kMGsmYQ")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        
            ; 

    }
});

client.on('chat', (channel, user, message, self) => {
    if(message === "!snapchat")  {
        client.say("Nashray_" ,"Le snpachat de nashray est ici : https://www.snapchat.com/add/jornashray")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!instagramm")  {
        client.say("Nashray_" ,"Le instagramm de nashray est ici : https://www.instagram.com/nashray_/")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!full odds")  {
        client.say("Nashray_" ,"Le full odds est une méthode de shasse consistant à se balader dans les hautes herbes, à pêcher, à surfer ou à faire des resets ou des oeufs sans aucun moyen d'augmenter le taux et donc la probabilité d'avoir un shiny (Charme Chroma, Navi-Dex, Pokéradar, Pêche à la chaîne ou Masuda par exemple).")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        
            ; 

    }
}); 

lient.on('chat', (channel, user, message, self) => {
    if(message === "!rng")  {
        client.say("Nashray_" ,"Pour résumer, c'est tout ce qui se passe dans le jeu et qui est dû au hasard.")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        
            ; 

    }
});   
