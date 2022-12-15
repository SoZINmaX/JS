// coordinates for 5 cities using switch case

let city = prompt('choose city');
let cityLowerCase = city.toLowerCase();

const coord = (cityLowerCase) => {
    switch (cityLowerCase) {
        case 'odessa':
            return ('46.482525;30.723309');
        case 'kyiv':
            return ('50.447731;30.542721');
        case 'lviv':
            return ('49.839684;24.029716');
        case 'donetsk':
            return ('48.0159;37.8028');
        case 'sevastopol':
            return ('46.482525;30.723309');
        default:
            break
    };
};

if (coord(cityLowerCase) === undefined) {
    alert("No coordinates for such city");
} else {
    alert(`Coordinates for ${city} ${coord(cityLowerCase)}`)
}