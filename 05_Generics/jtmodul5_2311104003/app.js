class HaloGeneric {
    static SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

HaloGeneric.SapaUser("Sofia"); 

class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const data = new DataGeneric("2311104003"); 
data.printData();
