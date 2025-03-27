const SayaTubeVideo = require("./SayaTubeVideo");
const SayaTubeUser = require("./SayaTubeUser");

try {
    let user = new SayaTubeUser("MARTRYATUS SOFIA");

    let videoTitles = [
        "Review Film Interstellar oleh MARTRYATUS SOFIA",
        "Review Film Inception oleh MARTRYATUS SOFIA",
        "Review Film The Dark Knight oleh MARTRYATUS SOFIA",
        "Review Film Parasite oleh MARTRYATUS SOFIA",
        "Review Film Avengers Endgame oleh MARTRYATUS SOFIA",
        "Review Film The Matrix oleh MARTRYATUS SOFIA",
        "Review Film Joker oleh MARTRYATUS SOFIA",
        "Review Film Titanic oleh MARTRYATUS SOFIA",
        "Review Film The Social Network oleh MARTRYATUS SOFIA",
        "Review Film Whiplash oleh MARTRYATUS SOFIA"
    ];

    let videos = videoTitles.map(title => new SayaTubeVideo(title));

    videos.forEach(video => user.addVideo(video));

    videos[0].increasePlayCount(5000);
    videos[1].increasePlayCount(25000000);

    console.log("\n=== Detail Video 1 ===");
    videos[0].printVideoDetails();

    console.log("\n=== Semua Video yang Ditambahkan ===");
    user.printAllVideoPlaycount();

} catch (error) {
    console.error("Error: ", error.message);
}
