class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video tidak boleh null dan maksimal 200 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (typeof count !== "number" || count < 0) {
            throw new Error("Play count harus berupa bilangan positif.");
        }
        if (count > 25000000) {
            throw new Error("Maksimal penambahan play count adalah 25.000.000.");
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
