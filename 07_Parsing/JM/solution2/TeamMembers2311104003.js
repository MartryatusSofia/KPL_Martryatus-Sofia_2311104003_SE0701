import fs from 'fs';

export class TeamMembers2311104003 {
  static ReadJSON() {
    const data = fs.readFileSync('./jurnal7_2_2311104003.json', 'utf-8');
    const obj = JSON.parse(data);

    console.log("Team member list:");
    obj.members.forEach((member) => {
      console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
    });
  }
}
