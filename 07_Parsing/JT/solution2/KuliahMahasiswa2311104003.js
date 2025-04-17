import fs from 'fs';

export class KuliahMahasiswa2311104003 {
  static ReadJSON() {

    const data = fs.readFileSync('./tp7_2_2311104003.json', 'utf-8');
    const obj = JSON.parse(data);

    console.log('Daftar Matakuliah:');
    obj.courses.forEach((mk, index) => {
      console.log(`${index + 1}. ${mk.code} - ${mk.name}`);
    });
  }
}
