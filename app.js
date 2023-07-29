const fs = require("fs");

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile(inputUrl)

if (data){
    const result = transFormData(data)
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


function transFormData(data){

    const rows = data.split('/\r?\n/');

    //1) creare una costante 'header' con la prima riga che AVRETE TOLTO a rows,
    //2) creare una costante 'headerArray' splittano la stinga header sulle virgole
    //3) creare un array chiammato stidentd
    //4) ciclate sull'array rows
        //4a) creare una costante rowArray splittando la singola row sulle virgole
        //4b) creare un oggetto vuoto chiamato student
        //4c) ciclare sull'headerArraya
            //4c1) per ogni elemento di headerArray aggiungo una proprietà all'oggetto student
                // student[headerArray[j]] = rowArray[j]
            //4d) aggiungo student a students
    //5) ritorno JSON.stringify di students

    //A1) tipipzzare i valori del json
    //A2)aggiungere un parametro alla app che mi permette di indicare il carattere divisorio
    //A3) gestire la possibiltà che nel csv ci siano degli spaaiì
    return JSON.stringify(rows)
}