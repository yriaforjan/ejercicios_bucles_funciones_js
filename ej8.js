/* Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola. */

const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];
  
// Añade tu código de bucle aquí

for (const artist of artists) {
    let primerasInfluencias = [];
    let ultimaInlfuencia = "";
    for (const influence of artist.influences) {
        let influencias = artist.influences;
        primerasInfluencias.push(influence);
        ultimaInlfuencia = influencias[influencias.length - 1];
    }
    primerasInfluencias.pop();
    console.log(`El artista ${artist.name} tiene como influencias: ${primerasInfluencias} y ${ultimaInlfuencia}`)
}

//CON UN BUCLE SIMPLE:
/* for (const artist of artists) {
    console.log (`El artista ${artist.name} tiene como influencias: ${artist.influences[0]}, ${artist.influences[1]} y ${artist.influences[2]}.`)
} */