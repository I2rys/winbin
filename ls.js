"use strict";

// Dependencies
const chalk = require("chalk")
const fs = require("fs")

// Variables
const arg = process.argv[2] || "."

// Main
try{
    const files = fs.readdirSync(arg)
    const fL = []

    files.forEach((file)=>{
        try{
            const fileS = fs.statSync(file)
            const isDirectory = fileS.isDirectory() ? "/" : ""
            const cM = fileS.isDirectory() ? chalk.blue : chalk.green
            fL.push(cM(`${file}${isDirectory}`))
        }catch(err){
            console.log(`Error while reading a file. ${err.message}`)
        }
    })

    console.log(fL.join(" "))
}catch(err){
    console.log(`Error while reading a directory. ${err.message}`)
}