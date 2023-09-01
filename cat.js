"use strict";

// Dependencies
const fs = require("fs")

// Variables
const arg = process.argv[2]

// Main
if(!arg) return console.log("usage: cat <filePath>")

try{
    const data = fs.readFileSync(arg, "utf8")
    console.log(data)
}catch(err){
    console.log(`Unable to read file. ${err.message}`)
}