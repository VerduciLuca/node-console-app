const { log } = require("console");
const fs = require("fs");
// const jsonConverter = require('./json-converter')
// const csvConverter = require('./csv-converter');
// const transformFromJsonToCsv = require("./csv-converter");

const inputUrl = process.argv[2];
const splittedInputUrl = inputUrl.split('.')
const ext = splittedInputUrl[splittedInputUrl.length - 1]

let transformFunction;
if (ext.toLowerCase.includes('json')) {

    transformFunction= require('./json-converter')

} else if (ext.toLowerCase.includes('csv')){

    transformFunction= require('./csv-converter')

} else {
    console.log('non posso convertire i file:' + ext);
    process.exit()
}

const outputUrl = process.argv[3];


let divider = process.argv[4]

let data = readFile(inputUrl)

if (data){
    const result = transformFromJsonToCsv(data,divider)
    writeData(outputUrl,result)
}

if (data){
    data+= '\npippo, pluto, paperino'
    writeData(outputUrl,data)
}




console.log('riuscito');

function readFile(url){
    try{
        const data = fs.readFileSync(url, 'utf8');
        return data
    } catch (err) {
        console.error(err.message)
        return null
    }
    
}

function writeData(url, data){
        try{
            fs.writeFileSync(url, data);

        } catch (err) {
            console.error(err.message)
        }        
}

