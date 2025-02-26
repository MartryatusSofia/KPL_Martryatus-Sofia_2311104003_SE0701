const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah barang yang dibeli : ", (n) => {
    let hargaBarang = [];
    let totalHarga = 0;
    n = parseInt(n);
    
    function inputBarang(i) {
        if (i < n) {
            rl.question(`Masukkan harga barang ke-${i+1}: `, (harga) => {
                hargaBarang.push(parseInt(harga));
                totalHarga += parseInt(harga);
                inputBarang(i + 1);
            });
        } else {
            let kategoriDiskon;
            if (totalHarga > 100000) {
                kategoriDiskon = "Diskon Besar";
            } else if (totalHarga >= 50000) {
                kategoriDiskon = "Diskon Sedang";
            } else {
                kategoriDiskon = "Tidak Ada Diskon";
            }
            
            console.log("\nOutput yang diharapkan:");
            console.log(`Total harga: ${totalHarga}`);
            console.log(`Jumlah barang: ${n}`);
            console.log(`Kategori Diskon: ${kategoriDiskon}`);
            
            for (let i = 0; i < n; i++) {
                console.log(`Informasi tambahan untuk barang ke-${i+1}`);
            }
            rl.close();
        }
    }
    
    inputBarang(0);
});
