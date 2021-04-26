window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div div div");

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            // setTimeout(() => {  sounds[index+1].play(); }, 4000);
        })
    })
        
});
const draggables = document.querySelectorAll(".draggable");
const measures = document.querySelectorAll(".measure");

// draggables.forEach(draggable => {
//     draggable.addEventListener("dragstart", (e) => {
//         e.dataTransfer
//         .setData('text/plain', e.target.id);
//         // const clone = draggable.cloneNode(true);
//         // clone.classList.add("dragging");
//         // clone.classList.add("clone");
//     })

//     draggable.addEventListener("dragend", () => {
//         draggable.classList.remove("dragging");
//     })
// })

// measures.forEach(measure => {
//     measure.addEventListener('dragover', (e) => {
//         console.log(e);
//         const draggable = document.getElementById(id)
//         // const draggable = document.querySelector(".clone");
//         measure.appendChild(draggable);
//     })
// })

function onDragStart(event) {
    if (event.target.parentElement.parentElement.className === "container-fluid pads") {
        event.target.classList.add("from-options");
    }
    else {
        event.target.classList.remove("from-options");
        event.target.classList.add("from-doc");
    }
    event.dataTransfer.setData('text/plain', event.target.id);
  }

function onDragOver(event) {
    event.preventDefault();
  }

function onDrop(event) {
    event.preventDefault();
    let dropzone = event.target;
    if (dropzone.className.includes("card-body-byte")) {
        console.log("test");
        dropzone = dropzone.parentElement.parentElement;
    }
    const id = event.dataTransfer.getData('text');
    const duplicate = document.getElementById(id).className.includes("from-options");
    console.log(dropzone);
    console.log(dropzone.childNodes.length)

    if(dropzone.childNodes.length > 1) {
        let newdropzone = dropzone;
        console.log(newdropzone);
        console.log(dropzone.childNodes[1]);
        dropzone.childNodes[1].remove();

        if (duplicate) {
            var nodeCopy = document.getElementById(id).cloneNode(true);
            // console.log(nodeCopy);
            nodeCopy.id = random() + id; /* We cannot use the same ID */
            newdropzone.appendChild(nodeCopy);
            }
        else {
            newdropzone.appendChild(document.getElementById(id)); 
        }
    }
    else {
        if (duplicate) {
            var nodeCopy = document.getElementById(id).cloneNode(true);
            // console.log(nodeCopy);
            nodeCopy.id = random() + id; /* We cannot use the same ID */
            dropzone.appendChild(nodeCopy); 
            }
        else {
            dropzone.appendChild(document.getElementById(id)); 
        }
    }
  }

function random() {
    return Math.random();
}

const playBtn = document.getElementById("play");
playBtn.addEventListener("click", playGrid);

function playGrid() {
    // const sounds = document.querySelectorAll(".sound");
    const sounds = []

    const measures1 = document.querySelectorAll(".row1");
    console.log(measures1);
    const measures2 = document.querySelectorAll(".row2");
    console.log(measures2);
    const measures3 = document.querySelectorAll(".row3");
    console.log(measures3);
    const measures4 = document.querySelectorAll(".row4");
    console.log(measures4);
    const measures = [measures1, measures2, measures3, measures4];
    // console.log(measures[0][0].childNodes[1].childNodes[1].childNodes[3]); //sound
    console.log(measures[0][1].childNodes.length);

    for(i=0; i<measures.length; i++) {
        // console.log(measures[i].childNodes.length);
        for (j=0; j<measures[i].length; j++) {
            if (measures[i][j].childNodes.length === 1) {
                sounds.push(null);
            }
            else {
                sounds.push(measures[i][j].childNodes[1].childNodes[1].childNodes[3])
            }
        }
    }
    console.log(sounds);

    for(i=0; i<measures.length; i++) {
        // console.log(measures[i].childNodes.length);
        for (j=0; j<measures[i].length; j++) {
            console.log(measures[i][j].childNodes[1] === undefined)
            if (measures[i][j].childNodes[1] === undefined) {
                continue;
            }
            else {
                let index = measures[i][j].childNodes[1].getAttribute("index");
                console.log(index);
                if (j===0) {
                    // sounds[index-1].play();
                    // sounds[index].currentTime = 0;
                    sounds[(4*i)+j].play()
                }
                else {
                    // setTimeout(() => { sounds[index-1].currentTime = 0; sounds[index-1].play(); }, j * 4800);
                    let index = (4*i)+j;
                    setTimeout(() => { console.log(sounds[index]); sounds[index].currentTime = 0; sounds[index].play(); }, j * 4800+0*i)
                }
            }
        }
    }
}

const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", saveGrid);

function saveGrid(event) {
    event.preventDefault();
    // const sounds = document.querySelectorAll(".sound");
    const sounds = []

    const measures1 = document.querySelectorAll(".row1");
    console.log(measures1);
    const measures2 = document.querySelectorAll(".row2");
    console.log(measures2);
    const measures3 = document.querySelectorAll(".row3");
    console.log(measures3);
    const measures4 = document.querySelectorAll(".row4");
    console.log(measures4);
    const measures = [measures1, measures2, measures3, measures4];
    // console.log(measures[0][0].childNodes[1].childNodes[1].childNodes[3]); //sound
    const savedArray = [ [], [], [], [] ];

    for(i=0; i<measures.length; i++) {
        // console.log(measures[i].childNodes.length);
        for (j=0; j<measures[i].length; j++) {
            if (measures[i][j].childNodes.length === 1) {
                savedArray[i][j] = null;
            }
            else {
                savedArray[i][j] = measures[i][j].childNodes[1].getAttribute("index");
            }
        }
    }
    console.log(JSON.stringify(savedArray));
    // playSaved(JSON.stringify(savedArray));
    let title = document.getElementById("song-title").value; 
    let description = document.getElementById("song-description").value;
    const songObj = {};

    if (title === "") {
        alert("You must enter a title for your song.");
        return;
    }
    else {
        soundObj = {
            title: title,
            description: description,
            data: JSON.stringify(savedArray),
        };
        console.log(soundObj);
        postGrid(soundObj);
    }
    // playSaved(savedArray);
    console.log(JSON.stringify(savedArray));
}

const postGrid = async (soundObj) => {
    const response = await fetch(`/api/songs/`, {
        method: 'POST',
        body: JSON.stringify(soundObj),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create project');
      }
}

function playSaved(savedBeat) {
    const sounds = document.querySelectorAll(".sound");
    if(typeof(savedBeat === "string")) {
        savedBeat = JSON.parse(savedBeat);
    }
    else if (typeof(savedBeat === "string")){
        savedBeat = savedBeat;
    }

    for(i=0; i<savedBeat.length; i++) {
        // console.log(measures[i].childNodes.length);
        for (j=0; j<savedBeat[i].length; j++) {
            if (savedBeat[i][j] === null) {
                continue;
            }
            else {
                let index = savedBeat[i][j];
                // console.log(index);
                if (j===0) {
                    sounds[index-1].play();
                    sounds[index-1].currentTime = 0;
                }
                else {
                    setTimeout(() => { sounds[index-1].currentTime = 0; sounds[index-1].play(); }, j * 4800-10*i);
                }
            }
        }
    }
}

const optionButtons = document.querySelector(".dropdown-menu").childNodes;
for(i=1; i<optionButtons.length; i=i+2) {
    optionButtons[i].addEventListener("click", displayOptions)
}


function displayOptions(e) {
    // console.log(e.target);
    const currentOptions = document.querySelectorAll(".options");
    for (i=0; i<currentOptions.length; i++) {
        if (currentOptions[i].className === "options row") {
            currentOptions[i].classList.add("hidden");
        }
    }
    const showId = e.target.getAttribute("id").replace("-btn", "");
    document.getElementById(showId).classList.remove("hidden");
}

function Highlight(event) {
    event.target.parentElement.parentElement.classList.add("highlight");
    console.log(event.target.parentElement.parentElement);
    setTimeout(() => { event.target.parentElement.parentElement.classList.remove("highlight"); }, 4800);
}

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clearMeasures);

function clearMeasures() {
    const measures = document.querySelectorAll(".measure");
    console.log(measures);
    measures.forEach(measure => {
        console.log(measure.childNodes)
        if (measure.childNodes.length === 1) {
            
        }
        else {
            measure.childNodes[1].remove();
        }
    })
}



