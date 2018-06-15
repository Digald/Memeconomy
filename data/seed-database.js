const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/memeconomy");

// import all of my models
const Pages = require('../models/Pages.js');

// import JSON data
console.log(__dirname);
const pages = JSON.parse(fs.readFileSync(__dirname + '/pages.json', 'utf-8'));

async function deleteData() {
    await Pages.remove();
    console.log('Pages data has been removed...');
    process.exit();
}

async function loadData() {
    try {
        await Pages.insertMany(pages);
        console.log('Pages data has been added...')
        process.exit();
    } catch(e) {
        console.log(e);
        process.exit();
    }
}

if (process.argv.includes('--delete')) {
    deleteData();
  } else {
    loadData();
  }