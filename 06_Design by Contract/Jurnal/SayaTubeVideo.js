class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video tidak boleh kosong dan harus kurang dari 100 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000); 
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Maksimal penambahan play count adalah 10.000.000.");
        }

        try {
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Terjadi overflow pada play count.");
            }
            this.playCount += count;
        } catch (error) {
            console.error("Error: ", error.message);
        }
    }

    printVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

module.exports = SayaTubeVideo; 