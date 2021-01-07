let url = "http://localhost:3000/shows";

fetch(url)
  .then((response) => response.json())
  .then((shows) => {
    shows.forEach((show) => {
      const showCard = document.createElement("div");
      showCard.classList.add("showcard");
      let date = document.createElement("p");
      let venue = document.createElement("p");
      let location = document.createElement("p");
      let price = document.createElement("p");
      let tixsold = document.createElement("p");
      let revenue = document.createElement("p");
      date.textContent = `Date: ${show.date}`;
      venue.textContent = `Venue: ${show.venue}`;
      location.textContent = `Location: ${show.location}`;
      price.textContent = `Price: ${show.price}`;
      tixsold.textContent = `TixSold: ${show.tixsold}`;
      revenue.textContent = `Total Revenue: $${show.price * show.tixsold}`;
      showCard.append(date, venue, location, price, tixsold, revenue);
      document.body.append(showCard);
      let id = show.id;
      showCard.addEventListener("click", () =>
        window.location.replace(
          `https://www.facebook.com/151878421549336/videos/3540588399286717`
        )
      );
    });
  });
