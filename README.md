# SetLy

SetLy is a web app designed for musicians and concert goers to gain insights into their professions and passions.

Musicians can use the app to hold their song library, add and edit songs, and use their song library to create set lists using the camelot mixing system. They can then save sets and show data to gain valuable insights about ticket sales, revenue, and performance based data like how often they've played certain songs.

Concert goers can view and share setlists with their friends, and keep track of shows they've attended to see data like how many times they've seen certain artists, or how many time they've seen an artist play their favorite song.

## Inspiration

As a musician myself, I had never done a great job of tracking my shows and sets, and always found myself looking for that sloppily written piece of paper from the last show to refer to what songs I'd played, or how many tickets I'd sold.

As an avid concert goer, I always thought it would be cool to track my shows and have access to more data on those shows.

## Technologies

💻JavaScript / HTML / CSS <br />
💻Ruby <br />
💻Rails <br />
💻SQLite3 <br />
💻Active Record <br />

## Demo Video
(https://www.youtube.com/watch?v=T71Ynuger6M&feature=youtu.be)

## Setup

- To access this app currently, users must clone this Github repository and open it in their code editor.
- Install the Ruby gems by running "bundle install".
- Create your local database by running "rails db:migrate".
- Seed the database by running "rails db:seed".
- After doing all of that, start up the back-end by running "rails s", and the front-end by running "lite-server", which will open the app in your browser.

## Instructions

Once logged in, Artist Users will be able to access and manage their personal song library in the "My Songs" tab at the top. From the "Make a New Set" tab, they will see their full song library, and can drag and drop their songs into a setlist that they can save and edit in the future. Once the show happens, they will be prompted to fill out show data including ticket sales and revenue(kept private on their end), and save the show and setlist to the database for concert goers to see.

![Build a Set Feature](https://i.imgur.com/JILMtmK.png)

For Concert Goer's, they will see a "Set Library" tab where they can browse through uploaded setlists, select and track the show's they've attended, and share shows and setlists with friends. From the "My Show Data" tab, they will be shown data on their concert history, including how many times they've seen specific artists, and specific songs by those artists.

## Code Example

Drag and Drop Functionality:

```
let dragged;

document.addEventListener("drag", (event) => {});

document.addEventListener("dragstart", (event) => {
  dragged = event.target;
  dragged.classList.add("dragging");
});

document.addEventListener("dragend", (event) => {
  dragged.classList.remove("dragging");
});

document.body.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.body.addEventListener("dragenter", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("droppable");
  }
  if (event.target.classList.contains("dropzoneright")) {
    event.target.classList.add("droppable");
  }
});

document.body.addEventListener("dragleave", (event) => {
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("droppable");
  }
  if (event.target.classList.contains("dropzoneright")) {
    event.target.classList.remove("droppable");
  }
});

document.body.addEventListener("drop", (event) => {
  event.preventDefault();

  const dropzone = event.target;

  if (dropzone.classList.contains("dropzone")) {
    dropzone.classList.remove("droppable");
    dragged.remove();
    dropzone.append(dragged);

    const positionElement = dropzone.querySelector("span");
    const positionNumber = positionElement.textContent;
    dragged.dataset.position = positionNumber;
  }

  if (dropzone.classList.contains("dropzoneright")) {
    dropzone.classList.remove("droppable");
    dragged.remove();
    dropzone.append(dragged);

    dragged.dataset.position = null;
  }
});
```

## Status

This app is still under construction. Concert-Goers do not yet have access to main features, as the show library is very minimal. I will be continuing the development of this app to complete all functionality for both Artist Users (musicians) as well as End Users (concert-goers). My personal music project - Pandasaywhat?! will pilot the app by suppying full show data to begin growing the song and show library.

Future features include sortability of song library by key or tempo, Concert-Goers access to past shows from all Artist-Users, and better reporting for both user types. 

## Challenges 

- Auth with different user models for Artists and Concert-Goers.
- 7 way Many-to-Many relationship.
- Drag and Drop functionality & saving setlists with correct song order data. 
- Finishing all features in less than 4 days. 


## Contact

[Linkedin](https://www.linkedin.com/in/jordan-panasewicz-77a93158/) Jordan Panasewicz
