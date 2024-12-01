/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];
  
// Añade tu código de bucle aquí

const starWarsMoviesByDecades = {
    the70s: [],
    the80s: [],
    the90s: [],
    the2000s: [],
    the2010s: [],
    from2020Onwards: []
}

for (const movie of starWarsMovies) {
    if (movie.releaseYear >= 1970 && movie.releaseYear < 1980) {
        starWarsMoviesByDecades.the70s.push(movie.title);
    } else if (movie.releaseYear >= 1980 && movie.releaseYear < 1990) {
        starWarsMoviesByDecades.the80s.push(movie.title);
    } else if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
        starWarsMoviesByDecades.the90s.push(movie.title);
    } else if (movie.releaseYear >= 2000 && movie.releaseYear <2010) {
        starWarsMoviesByDecades.the2000s.push(movie.title);
    } else if (movie.releaseYear >= 2010 && movie.releaseYear < 2020) {
        starWarsMoviesByDecades.the2010s.push(movie.title);
    } else {
        starWarsMoviesByDecades.from2020Onwards.push(movie.title);
    }
}

console.log (starWarsMoviesByDecades);