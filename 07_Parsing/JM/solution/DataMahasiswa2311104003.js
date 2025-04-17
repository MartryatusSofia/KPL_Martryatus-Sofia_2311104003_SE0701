import fs from 'fs';

export class DataMahasiswa2311104003 {
  static ReadJSON() {
    const data = fs.readFileSync('./jurnal7_1_2311104003.json', 'utf-8');
    const obj = JSON.parse(data);

    console.log(`Nama: ${obj.firstName} ${obj.lastName}`);
    console.log(`Jenis Kelamin: ${obj.gender}`);
    console.log(`Umur: ${obj.age} tahun`);
    console.log(`Alamat: ${obj.address.streetAddress}, ${obj.address.city}, ${obj.address.state}`);
    console.log("Mata Kuliah:");
    obj.courses.forEach((course, index) => {
      console.log(`  ${index + 1}. ${course.code} - ${course.name}`);
    });
  }
}
