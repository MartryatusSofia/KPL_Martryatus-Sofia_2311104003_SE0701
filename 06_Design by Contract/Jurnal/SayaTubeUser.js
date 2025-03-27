const SayaTubeVideo = require("./SayaTubeVideo");

class SayaTubeUser {
    constructor(username) {
        if (!username) {
            throw new Error("Username tidak boleh null.");
        }
        if (username.length > 100) {
            throw new Error("Username maksimal 100 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    addVideo(video) {
        if (!video) {
            throw new Error("Video yang ditambahkan tidak boleh null.");
        }
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Hanya objek dari SayaTubeVideo yang bisa ditambahkan.");
        }
        if (video.playCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count video tidak boleh melebihi batas integer.");
        }

        this.uploadedVideos.push(video);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        const maxVideos = Math.min(this.uploadedVideos.length, 8); 
        for (let i = 0; i < maxVideos; i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

module.exports = SayaTubeUser;
