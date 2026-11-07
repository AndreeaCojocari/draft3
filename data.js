let songs = [
  { id: 1, 
title: "The Colour Violet", 
artist: "Tory Lanez",
genre: "R&B", 
rating: 3, 
mood: "Late Night" 
  },

  { id: 2, 
title: "Big Jefe",
artist: "Denzil Grenade", 
genre: "Afro-Beat", 
rating: 4, 
mood: "Upbeat" 
  },

  { id: 3, 
title: "Diamond",
artist: "Plantain Papi", 
genre: "Afro-Beat", 
rating: 4, 
mood: "Energetic" 
  },

  { id: 4, 
title: "Secondhand",
artist: "Don Toliver feat. Rema", 
genre: "Afrobeats/Trap", 
rating: 4, 
mood: "Upbeat" 
  },

  { id: 5, 
title: "Off Licence",
artist: "Chip & Nafe Smallz", 
genre: "Hip-Hop", 
rating: 4, 
mood: "Energetic" 
  },

  { id: 6, 
title: "College Girls",
artist: "NLE Choppa", 
genre: "Hip-Hop/Rap", 
rating: 5, 
mood: "Passionate" 
  },

  { id: 7, 
title: "Way Bigger",
artist: "Don Toliver", 
genre: "Rap", 
rating: 4, 
mood: "Bold" 
  },

  { id: 8, 
title: "NEVA Cared",
artist: "Polo G", 
genre: "Hip-Hop", 
rating: 3, 
mood: "Fierce" 
  },

  { id: 9, 
title: "Red Bikini",
artist: "Snow Wife ft. Hayley Kiyoko", 
genre: "Pop", 
rating: 4, 
mood: "Carefree" 
  },

  { id: 10, 
title: "Time",
artist: "JAFARIS", 
genre: "Pop", 
rating: 4, 
mood: "Mellow" 
  },

  { id: 11, 
title: "Les",
artist: "Childish Gambino", 
genre: "Hip-Hop/Rap", 
rating: 4, 
mood: "Passionate" 
  },

  { id: 12, 
title: "Bonfire",
artist: "Childish Gambino", 
genre: "Hip-Hop", 
rating: 5, 
mood: "Aggressive" 
  },

  { id: 13, 
title: "Heartbeat",
artist: "Childish Gambino", 
genre: "Hip-Hop/R&B", 
rating: 4, 
mood: "Passionate" 
  },

  { id: 14, 
title: "Waste Man",
artist: "V.I.C", 
genre: "Hip-Hop/Rap", 
rating: 3, 
mood: "Laid Back" 
  },

  { id: 15, 
title: "Glide",
artist: "Mab Schola", 
genre: "Hip-Hop/Rap", 
rating: 3, 
mood: "Smooth" 
  },

  { id: 16, 
title: "UH HUH",
artist: "YNF Martyr", 
genre: "Hip-Hop/Rap", 
rating: 3, 
mood: "Hype" 
  },

  { id: 17, 
title: "Thru Your Phone",
artist: "Cardi B", 
genre: "Hip-Hop/Rap", 
rating: 5, 
mood: "Aggressive" 
  },

  { id: 18, 
title: "Almost Love",
artist: "Sabrina Carpenter", 
genre: "Dance-Pop", 
rating: 3, 
mood: "Playful" 
  },

  { id: 19, 
title: "Take Me Out This Club",
artist: "Summer Walker", 
genre: "R&B/Soul", 
rating: 3, 
mood: "Flirty" 
  },

  { id: 20, 
title: "Brand-New",
artist: "KAIRO", 
genre: "Hip-Hop/R&B", 
rating: 3, 
mood: "Bold" 
  },

  { id: 21, 
title: "Reset",
artist: "JayO ft. Crayon & Bella Shmurda", 
genre: "Afro-Beat", 
rating: 3, 
mood: "Uplifting" 
  },

  { id: 22, 
title: "Love Is",
artist: "Egor Kreed", 
genre: "Hip-Hop/R&B", 
rating: 3, 
mood: "Emotional" 
  },

  { id: 23, 
title: "Acele",
artist: "Carla's Dreams", 
genre: "Pop", 
rating: 4, 
mood: "Restless" 
  }
];

let nextId = 24;

const capitalise = (str) =>
  str
    .split(" ")
    .map(w => w ? w.charAt(0).toUpperCase() + w.substring(1).toLowerCase() : "")
    .join(" ");

const renderSongs = (list) => {
  const body = document.querySelector("#songBody");
  const message = document.querySelector("#message");

  body.innerHTML = "";

  list.forEach(song => {
    const row = document.createElement("tr");
    const stars = "⭐".repeat(song.rating);
    row.insertAdjacentHTML("beforeend", `
      <td>${song.title}</td>
      <td>${song.artist}</td>
      <td>${song.genre}</td>
      <td>${stars}</td>
      <td>${song.mood}</td>
      <td><button onclick="deleteSong(${song.id})">Delete</button></td>
    `);
    body.appendChild(row);
  });

message.textContent = `Showing ${list.length} song(s) of ${songs.length} total.`;
};

const loadSongs = () => {
document.querySelector("#searchInput").value = "";
renderSongs(songs);
};

const addSong = (evt) => {
evt.preventDefault();

const titleInput = document.querySelector("#title").value.trim();
const artist = document.querySelector("#artist").value.trim();
const genre = document.querySelector("#genre").value.trim();
const rating = parseInt(document.querySelector("#rating").value);
const mood = document.querySelector("#mood").value.trim();

  if (!titleInput || !artist || !genre || !mood || isNaN(rating) || rating < 1 || rating > 5) {
    alert("Please fill in all fields (rating 1-5).");
    return;
  }

  const title = capitalise(titleInput);
  const dateAdded = new Date().toLocaleDateString("en-IE");

  songs.push({ id: nextId++, title, artist, genre, rating, mood, dateAdded });
  renderSongs(songs);

  document.querySelector("#songForm").reset();
};
const deleteSong = (id) => {
  if (!confirm("Delete this song?")) return;
  songs = songs.filter(s => s.id !== id);
  renderSongs(songs);
};

const searchSongs = () => {
  const q = document.querySelector("#searchInput").value.trim().toLowerCase();

  if (!q) {
    renderSongs(songs);
    return;
  }

  const results = songs.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.artist.toLowerCase().includes(q) ||
    s.genre.toLowerCase().includes(q)
  );

  renderSongs(results);
};

document.querySelector("#searchInput").addEventListener("input", searchSongs);
document.querySelector("#songForm").addEventListener("submit", addSong);
document.querySelector(".button").addEventListener("click", loadSongs);

loadSongs();

