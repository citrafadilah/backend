const mongoose = require("mongoose");

//versi 2.2.12
// "mongodb+srv://mdp:haechan01y@cluster0.myncj.mongodb.net/dbbutik?retryWrites=true&w=majority&appName=Cluster0"
//  "mongodb://mdp:haechan01y@cluster0-shard-00-00.myncj.mongodb.net:27017,cluster0-shard-00-01.myncj.mongodb.net:27017,cluster0-shard-00-02.myncj.mongodb.net:27017/dbbutik?ssl=true&replicaSet=atlas-t07ebu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(    
    "mongodb+srv://mdp:haechan01y@cluster0.myncj.mongodb.net/dbbutik?retryWrites=true&w=majority&appName=Cluster0"
  ).then(() => {
    console.log("Connected to Database");
  }).catch((err) => {
    console.error("App Starting error", err.stack);
    console.log("Connection Failed");
  });
  