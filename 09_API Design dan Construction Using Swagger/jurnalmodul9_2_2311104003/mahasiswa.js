class Mahasiswa {
    constructor(name, nim, course, year) {
        this.name = name;
        this.nim = nim;
        this.course = course;
        this.year = year;
    }
}

const mahasiswaList = [
    new Mahasiswa("Adit Pratama", "1202210001", ["Algoritma", "Basis Data"], 2021),
    new Mahasiswa("Bella Salsabila", "1202210002", ["PBO", "RPL"], 2022),
    new Mahasiswa("Citra Anindya", "1202210003", ["Jaringan Komputer", "AI"], 2021)
];

module.exports = { Mahasiswa, mahasiswaList };
