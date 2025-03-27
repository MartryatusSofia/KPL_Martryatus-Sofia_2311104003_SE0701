const SayaTubeVideo = require("./SayaTubeVideo"); 
class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh kosong dan maksimal 100 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Hanya objek dari SayaTubeVideo yang bisa ditambahkan.");
        }
        this.uploadedVideos.push(video);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

module.exports = SayaTubeUser;
