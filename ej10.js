/* Desarrolla una función que reciba un país por parámetro y devuelva su capital.
Utiliza un objeto para almacenar los países y sus capitales.
La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado. */

const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {
    // insert code
    const countries = [];
    for (const key in capitals) {
        countries.push(key);
    }
    if (countries.includes(country)) {
        for (const key in capitals) {
            if (country == key) {
                return capitals[key];
            }
        }
    } else {
        return `Lo siento, desconozco la capital de ${country}`;
    }
}

/* console.log(getCapital("Spain")); */