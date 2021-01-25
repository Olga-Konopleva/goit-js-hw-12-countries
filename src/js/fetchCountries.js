import refs from './refs';
import countryTpl from '../tamplates/country.hbs'

function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    fetch(url).then(article => article.json())
    .then(countries => {
        const markup = countryTpl(countries);
        refs.country.innerHTML=markup;
    })
}

export default fetchCountries;