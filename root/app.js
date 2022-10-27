// dependencies
const {readFileSync, promises: fsPromises} = require('fs');
const fs = require('fs');
const prompt = require("prompt-async");
const express = require('express');
const app = express();

// to view application, navigate to http://localhost:4155/
let port = 4155;
let host = 'localhost';
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true}));

// variables for data generation
const weight = {}; // object map for buildings and weight (of connections)
let JSON_weight = ""; // to store weight in JSON format to pass to view
let keys = []; // stores unique buildings as strings
let upper_words = []; // all uppercase words (to simplify regex)
let exact_location_uf = []; // stores unformatted exact location (building name + room # + excess characters)
let exact_location_f = []; // stores formatted exact location (building name + room #)
let general_location = []; // stores formatted exact location (building name)
let reU = /[A-Z]\S*/g; // regex for uppercase words
let reE = /^[^_]+(?=_)/g; // regex for characters before underscore
let reG = /([^\d]+)/g; // regex for characters before digit

async function prompt_async() {
    let valid = false;
    let data_files = [];
    // list files in directory
    fs.readdir('./data/', (err, files) => {
        console.log("");
        files.forEach(file => {
          console.log(file);
          data_files.push(file);
        });
        console.log("-\nenter the filename to parse:")
    });
    // prompt user for filename
    prompt.start();
    let f = await prompt.get('filename');
    let filename = JSON.stringify(f).substring(12).slice(1, -2);
    for (let i = 0; i < data_files.length; i++){
        if (filename == data_files[i]) {
            valid = true;
        }
    }
    // call main logic
    if (valid) {
        let path = './data/' + filename;
        generate(path); 
    }
    // restart
    else {
        console.log("\n--------------------");
        console.log("| invalid filename |")
        console.log('--------------------\n'); // decoration 
        prompt_async();
    }
}

// main logic
async function generate(filename) {
    // start application
    app.listen(port, host, ()=>{
        console.log("\n------------------------");
        console.log('| running on port',port,'|');
        console.log('------------------------\n'); // decoration 
    });
    try {
        // parse data file
        const contents = await fsPromises.readFile(filename, 'utf-8');
        const data = contents.split(/\r?\n/);

        // account for excess lines
        data.shift(); // remove leading system log line
        data.pop(); // remove trailing blank line

        // capture uppercase words  
        for (i=0; i<data.length; i++){
            let str = data[i];
            let _new = str.match(reU);
            upper_words.push(_new);
        }

        // capture unformatted location (building name + room # + excess characters)
        for (i=0; i<upper_words.length; i++){
            let temp = upper_words[i];
            exact_location_uf.push(temp[1]);
        }

        // capture formatted location (building name + room #)
        for (i=0; i<exact_location_uf.length; i++){
            let str = exact_location_uf[i];
            let _new = str.match(reE);
            let f = _new.toString();
            exact_location_f.push(f);
        }
        
        // capture general location (building name)
        for (i=0; i<exact_location_f.length; i++){
            let str = exact_location_f[i];
            let _new = str.match(reG);
            let f = _new.toString();
            // some of the locations include a letter after the room number; this code removes it
            if (f.includes(",")){f = f.match(/^[^,]+(?=,)/g).toString();}
            general_location.push(f);
        }
        
        // find unique buildings
        keys = [... new Set(general_location)];

        // create JSON data structure
        for (i=0; i<keys.length; i++){
            weight[keys[i]] = 0;
        }

        // calculate weight (number of connections per building)
        for (i=0; i<general_location.length; i++){
            let k = general_location[i];
            for (j=0; j<keys.length; j++){
                if (k == keys[j]){weight[k]++;}
            }
        }

        // format and display data
        JSON_weight = JSON.stringify(weight);
        console.log("number of connections per building:");
        console.log(weight);
        return weight;

    // error handler
    } catch (err) {
        console.log(err);
    }
}
// extract data from user-specified data file
prompt_async();

// render landing page with JSON data containing the number of connections per building
app.get('/', (req,res)=> {
    res.render('index', {JSON_weight});
});