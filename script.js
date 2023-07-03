
// fetch batman
fetch("https://www.omdbapi.com/?apikey=cc725204&t=batman")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli1").src = data.Poster;
        document.getElementById("namePeli1").innerHTML = data.Title;
        document.getElementById("genrePeli1").innerHTML = data.Genre;

    });

// fetch Gladiator
fetch("https://www.omdbapi.com/?apikey=cc725204&t=gladiator")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli2").src = data.Poster;
        document.getElementById("namePeli2").innerHTML = data.Title;
        document.getElementById("genrePeli2").innerHTML = data.Genre;

    });

// fetch Dragon
fetch("https://www.omdbapi.com/?apikey=cc725204&t=Dragon")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli3").src = data.Poster;
        document.getElementById("namePeli3").innerHTML = data.Title;
        document.getElementById("genrePeli3").innerHTML = data.Genre;


    });

// fetch shrek2
fetch("https://www.omdbapi.com/?apikey=cc725204&t=the%20last%20samurai")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli4").src = data.Poster;
        document.getElementById("namePeli4").innerHTML = data.Title;
        document.getElementById("genrePeli4").innerHTML = data.Genre;



    });