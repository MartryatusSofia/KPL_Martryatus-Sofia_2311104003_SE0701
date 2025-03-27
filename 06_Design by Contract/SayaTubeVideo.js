class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000); 
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

let video = new SayaTubeVideo("Tutorial Design By Contract - [MARTRYATUS SOFIA]");
video.printVideoDetails();
video.increasePlayCount(500);
video.printVideoDetails();
