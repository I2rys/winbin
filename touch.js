"use strict";

// Dependencies
const path = require("path")
const fs = require("fs")

// Variables
const arg = process.argv[2]

// Functions
function touch(fPath){
    try{
        fs.openSync(fPath, "w")
        console.log(`File successfully created. ${fPath}`)
    }catch(err){
        console.log(`Unable to create file. ${err.message}`)
    }
}

// Main
if(!arg) return console.log("usage: touch <filePath>")

touch(path.resolve(arg))