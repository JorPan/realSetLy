let queryParams = new URLSearchParams(window.location.search);
let id = queryParams.get("id");
let url = `http://localhost:3000/songs/${id}`;
let titleInput = document.querySelector("#title");
let keyInput = document.querySelector("#key");
let tempoInput = document.querySelector("#tempo");
let releasedInput = document.querySelector("#released");
let albumInput = document.querySelector("#album");
let yearInput = document.querySelector("#year");

fetch(url)
  .then((response) => response.json())
  .then((song) => {
    titleInput.value = song.title;
    keyInput.value = song.key;
    tempoInput.value = song.tempo;
    releasedInput.value = song.released;
    albumInput.value = song.album;
    yearInput.value = song.year;
    console.log(titleInput.value);
  });

let editForm = document.querySelector(".editform");

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.value,
      key: key.value,
      tempo: tempo.value,
      released: released.value,
      album: album.value,
      year: year.value,
    }),
  }).then(() => window.location.replace("/songs.html"));
});
