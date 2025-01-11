const mongoose = require("mongoose");
mongoose.connect(
    
    "mongodb+srv://mdp:haechan01y@cluster0.myncj.mongodb.net/dbbutik?retryWrites=true&w=majority&appName=Cluster0"
  ).then(() => {
    console.log("Connected to Database");
  }).catch((err) => {
    console.error("App Starting error", err.stack);
    console.log("Connection Failed");
  });
  