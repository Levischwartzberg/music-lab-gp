console.log("test");

function playSong() {
    const sounds = document.querySelectorAll(".sound");
    console.log(sounds);
    const songData = JSON.parse(document.getElementById("song-data").textContent);
    for (i=0; i<songData.length; i++) {
        for (j=0; j<songData[i].length; j++) {
            if (songData[i][j] === null) {
                continue;
            }
            else {
                const index = songData[i][j];
                console.log(index);
                if (j===0) {
                    // sounds[index-1].play();
                    // sounds[index].currentTime = 0;
                    sounds[index].play()
                }
                else {
                    // setTimeout(() => { sounds[index-1].currentTime = 0; sounds[index-1].play(); }, j * 4800);
                    setTimeout(() => { console.log(sounds[index]); sounds[index].currentTime = 0; sounds[index].play(); }, j * 4800)
                }
            }
        }
    }
}

// playSong();
const sounds = document.querySelectorAll(".sound");
sounds[2].play();
