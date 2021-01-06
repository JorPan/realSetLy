const songsURL = "http://localhost:3000/songs";

fetch(songsURL)
  .then((response) => response.json())
  .then((songs) => {
    songs.forEach((song) => {
      let songList = document.querySelector(".mysonglist");
      let li = document.createElement("li");
      let div = document.createElement("div");
      li.style = "list-style: none";
      li.classList.add("songcardinfo");
      div.classList.add("songcard");
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete Song";
      let titleDiv = document.createElement("div");
      let keyDiv = document.createElement("div");
      let tempoDiv = document.createElement("div");
      let titlep = document.createElement("p");
      let keyp = document.createElement("p");
      let tempop = document.createElement("p");
      titlep.textContent = song.title;
      keyp.textContent = song.key;
      tempop.textContent = song.tempo;
      titleDiv.append(titlep);
      keyDiv.append(keyp);
      tempoDiv.append(tempop);
      li.append(titleDiv, keyDiv, tempoDiv, deleteButton);
      div.append(li);
      songList.append(div);

      deleteButton.addEventListener("click", deleteSong);

      function deleteSong(e) {
        let id = song.id;
        li.remove();
        fetch(`${songsURL}/${id}`, {
          method: "DELETE",
        });
      }
    });
  });

const newSongForm = document.querySelector(".addsongform form");

newSongForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  let title = formData.get("title");
  let key = formData.get("key");
  let tempo = formData.get("tempo");
  let songList = document.querySelector(".mysonglist");
  let li = document.createElement("li");
  let div = document.createElement("div");
  li.style = "list-style: none";
  li.classList.add("songcardinfo");
  div.classList.add("songcard");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Song";
  let titleDiv = document.createElement("div");
  let keyDiv = document.createElement("div");
  let tempoDiv = document.createElement("div");
  let titlep = document.createElement("p");
  let keyp = document.createElement("p");
  let tempop = document.createElement("p");
  titlep.textContent = title;
  keyp.textContent = key;
  tempop.textContent = tempo;
  titleDiv.append(titlep);
  keyDiv.append(keyp);
  tempoDiv.append(tempop);
  li.append(titleDiv, keyDiv, tempoDiv, deleteButton);
  div.append(li);
  songList.append(div);
  fetch(songsURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      key: formData.get("key"),
      tempo: formData.get("tempo"),
      released: formData.get("released"),
      album: formData.get("album"),
      year: formData.get("year"),
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });

  event.target.reset();
});
