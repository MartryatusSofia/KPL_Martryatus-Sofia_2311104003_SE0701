
class DoorMachine {
    constructor() {
        this.state = "Terkunci"; 
        console.log("Pintu terkunci");
    }

    kunciPintu() {
        if (this.state === "Terkunci") {
            console.log("Pintu sudah terkunci.");
        } else {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        }
    }

    bukaPintu() {
        if (this.state === "Terbuka") {
            console.log("Pintu sudah tidak terkunci.");
        } else {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        }
    }
}


const pintu = new DoorMachine(); 
pintu.bukaPintu(); 
pintu.kunciPintu(); 
pintu.kunciPintu(); 
pintu.bukaPintu(); 
