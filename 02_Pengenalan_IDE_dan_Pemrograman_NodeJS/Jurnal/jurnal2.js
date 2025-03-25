const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const array = Array.from({ length: 50 }, (_, index) => index);

array.forEach((num) => {
    let output = `${num}`;
    if (num % 2 === 0 && num % 3 === 0) {
        output += " #$#$";
    } else if (num % 2 === 0) {
        output += " ##";
    } else if (num % 3 === 0) {
        output += " $$";
    }
    console.log(output);
});

rl.question("Masukkan angka (1-10000): ", (nilaiString) => {
    const nilaiInt = parseInt(nilaiString);
    
    if (!isNaN(nilaiInt) && nilaiInt >= 1 && nilaiInt <= 10000) {
        console.log(`Anda memasukkan angka: ${nilaiInt}`);
    } else {
        console.log("Masukkan angka yang valid antara 1 hingga 10000!");
    }
    
    rl.close();
});