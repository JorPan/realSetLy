let addRowButton = document.querySelector(".addrowbutton");
let removeRowButton = document.querySelector(".removerowbutton");
let setLayOut = document.querySelector(".setlayout");
let rowCount = 20;

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

const mySongs = document.querySelector(".rightset");

fetch("http://localhost:3000/songs")
  .then((response) => response.json())
  .then((songs) => {
    songs.forEach((song) => {
      let songDiv = document.createElement("div");
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
      console.log(song);
    });
  });
