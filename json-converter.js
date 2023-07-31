function transformFromCsvToJson(data, divider) {
    const rows = data.split("/\r?\n/");

  //1) creare una costante 'header' con la prima riga che AVRETE TOLTO a rows,

    const header = rows.shift();
    console.log(header);

  //2) creare una costante 'headerArray' splittano la stinga header sulle virgole

    const headerArray = header.split(",");

  //3) creare un array chiammato students

    const elements = [];
  //4) ciclate sull'array rows

    for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowArray = row.split("");
    console.log(rowArray);

    const element = {};

    for (let j = 0; j < headerArray.length; j++) {
        const key = headerArray[j].trim();
        const convertedValue = tryParse(key);
        console.log(key);
        element[key] = convertedValue;
        console.log(element);
    }

    elements.push(element);
    console.log(elements);
    }

    return JSON.stringify(elements, null, 4);

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
}

function tryParse(str) {
    if (str === "true") {
    return true;
    }
    if (str === "false") {
    return false;
    }

    const number = parseFloat(str);
    if (isNan(number)) {
    return str;
    } else return number;
}

exports = {transform: transformFromCsvToJson, parse: tryParse} 