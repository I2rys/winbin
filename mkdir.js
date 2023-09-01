"use strict";

// Dependencies
const fs = require("fs")

// Variables
const dir = process.argv[2]

// Functions
function mkdir(){
    try{
        fs.mkdirSync(dir)
        console.log("Successfully made the dir.")
    }catch(err){
        console.log(`Unable to make dir. ${err.message}`)
    }
}

// Main
dir ? mkdir() : console.log("usage: mkdir <dirPath>")