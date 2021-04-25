// console.log("test");

function playSong(event) {
    event.preventDefault();
    const sounds = document.querySelectorAll(".sound");
    // console.log(sounds);
    const songData = JSON.parse(document.getElementById("song-data").textContent);
    for (i=0; i<songData.length; i++) {
        for (j=0; j<songData[i].length; j++) {
            if (songData[i][j] === null) {
                continue;
            }
            else {
                const index = songData[i][j];
                // console.log(index);
                if (j===0) {
                    // sounds[index-1].play();
                    // sounds[index].currentTime = 0;
                    sounds[index-1].play()
                }
                else {
                    // setTimeout(() => { sounds[index-1].currentTime = 0; sounds[index-1].play(); }, j * 4800);
                    setTimeout(() => { sounds[index-1].currentTime = 0; sounds[index-1].play(); }, j * 4800)
                }
            }
        }
    }
}

// playSong();
const sounds = document.querySelectorAll(".sound");

const playBtn = document.getElementById("play");
playBtn.addEventListener("click", playSong);

const commentBtn = document.getElementById("commentBtn");
commentBtn.addEventListener("click", addComment);

function addComment(event) {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-content').value.trim();
    const id = document.getElementById("comment-content").getAttribute("data-id");
    console.log(comment);
    console.log(id);
    const commentObj = {
        comment: comment,
        song_id: id,
    }
    postComment(commentObj);
}

const postComment = async (commentObj) => {
    const id = document.getElementById("comment-content").getAttribute("data-id");
    if (commentObj) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify(commentObj),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/song/${id}`);
      } else {
        alert('Failed to add comment');
      }
    }
  };
