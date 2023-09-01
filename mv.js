"use strict";

// Dependencies
const path = require("path")
const fs = require("fs")

// Variables
const fP = process.argv[2]
const dP = process.argv[3]

// Functions
function mv(sFP, sDP){
    try{
        fs.renameSync(sFP, sDP)
        console.log(`Successfully moved "${sFP}" to "${sDP}"`)
    }catch(err){
        console.log(`Unable to move. ${err.message}`)
    }
}

// Main
fP && dP ? mv(path.resolve(fP), path.resolve(dP)) : console.log("usage: mv <filePath> <destinationPath>")