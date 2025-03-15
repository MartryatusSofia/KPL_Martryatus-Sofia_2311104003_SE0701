const readline = require("readline");

class KodePos {
    constructor() {
        this.dataKodePos = {
            "Batununggal": "40266",
            "Kujangsari": "40287",
            "Mengger": "40267",
            "Wates": "40256",
            "Cijaura": "40287",
            "Jatisari": "40286",
            "Margasari": "40286",
            "Sekejati": "40286",
            "Kebonwaru": "40272",
            "Maleer": "40274",
            "Samoja": "40273"
        };
    }

    getKodePos(kelurahan) {
        return this.dataKodePos[kelurahan] || "Kode Pos tidak ditemukan";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const kodePosInstance = new KodePos();

rl.question("Masukkan nama kelurahan: ", function(kelurahan) {
    console.log(`Kode Pos ${kelurahan} adalah: ${kodePosInstance.getKodePos(kelurahan)}`);
    rl.close();
});
