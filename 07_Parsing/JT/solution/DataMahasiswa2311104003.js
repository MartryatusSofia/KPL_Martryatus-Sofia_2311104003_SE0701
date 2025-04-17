import fs from 'fs';

export class DataMahasiswa2311104003 {
  static ReadJSON() {
    const data = fs.readFileSync('./tp7_1_2311104003.json', 'utf-8');
    const obj = JSON.parse(data);
    console.log(`Nama ${obj.nama.depan} ${obj.nama.belakang} dengan nim ${obj.nim} dari prodi ${obj.fakultas}`);
  }
}
