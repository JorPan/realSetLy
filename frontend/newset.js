let addRowButton = document.querySelector(".addrowbutton");
let removeRowButton = document.querySelector(".removerowbutton");
let setLayOut = document.querySelector(".setlayout");
let rowCount = 20;
let camelot = document.querySelector(".camelot");
const mySongs = document.querySelector(".rightset");

camelot.addEventListener("click", () => {
  camelot.classList.toggle("camelotbig");
});

addRowButton.addEventListener("click", addRow);

function addRow(event) {
  let newRow = document.createElement("div");
  newRow.classList.add("dropzone");
  newRow.textContent = rowCount += 1;
  setLayOut.append(newRow);
}

removeRowButton.addEventListener("click", removeRow);

function removeRow(event) {
  let rowToDelete = document.querySelector(".dropzone:last-child");
  rowToDelete.remove();
  rowCount -= 1;
}

fetch("http://localhost:3000/songs")
  .then((response) => response.json())
  .then((songs) => {
    songs.forEach((song) => {
      let songDiv = document.createElement("div");
      songDiv.draggable = true;
      // songDiv.dataset.orderId = index;

      setSongDivDragEvents(songDiv);
      let mySongs = document.querySelector(".mysongs");
      songDiv.classList.add("song");
      let titleDiv = document.createElement("div");
      let keyDiv = document.createElement("div");
      let tempoDiv = document.createElement("div");
      let titlep = document.createElement("p");
      let keyp = document.createElement("p");
      let tempop = document.createElement("p");
      titlep.textContent = song.title;
      keyp.textContent = song.key;
      tempop.textContent = `${song.tempo} bpm`;
      titleDiv.append(titlep);
      keyDiv.append(keyp);
      tempoDiv.append(tempop);
      songDiv.append(titleDiv, keyDiv, tempoDiv);
      mySongs.append(songDiv);
    });
  });

function setSongDivDragEvents(songDiv) {
  songDiv.addEventListener("drag", (event) => {
    const dragCard = event.target;
  });
  songDiv.addEventListener("dragstart", (event) => {
    const dragCard = event.target;
    dragCard.classList.add("dragging");
  });
  songDiv.addEventListener("dragend", (event) => {
    const dragCard = event.target;
    dragCard.classList.remove("dragging");
  });
  document.body.addEventListener("dragover", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.add("droppable");
    }
  });
  document.body.addEventListener("dragleave", (event) => {
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.remove("droppable");
    }
  });
  document.body.addEventListener("drop", (event) => {
    console.log(event.target);
    event.target.append(songDiv);
  });
}
