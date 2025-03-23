class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        let hasil = a + b + c;
        console.log(`Hasil penjumlahan: ${hasil}`);
    }
}

let angka1 = 23; 
let angka2 = 11; 
let angka3 = 10; 

Penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);

class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toISOString());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}


const db = new SimpleDataBase();


db.AddNewData(23);
db.AddNewData(11);
db.AddNewData(10);


db.PrintAllData();
