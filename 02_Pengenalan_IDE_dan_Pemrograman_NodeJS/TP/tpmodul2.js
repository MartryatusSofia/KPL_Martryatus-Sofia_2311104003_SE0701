const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan satu huruf: ", (input) => {
    const huruf = input.toUpperCase(); 
    const vokal = ["A", "I", "U", "E", "O"];

    if (huruf.length === 1 && huruf >= "A" && huruf <= "Z") {
        if (vokal.includes(huruf)) {
            console.log(`Huruf ${huruf} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${huruf} merupakan huruf konsonan`);
        }
    } else {
        console.log("Masukkan hanya satu huruf kapital!");
    }

    const bilanganGenap = [2, 4, 6, 8, 10];

    bilanganGenap.forEach((angka, index) => {
        console.log(`Angka genap ${index + 1} : ${angka}`);
    });

    rl.close(); 
});
