import refs from './refs';
import countriesTpl from '../tamplates/countries.hbs';
import countryTpl from '../tamplates/country.hbs';
import notify from './notify'

function fetchCountries(searchQuery) {
    refs.country.innerHTML = '';
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    fetch(url).then(article => article.json())
    .then(countries => {
        if(countries.length === 1) {
            const markup = countryTpl(countries);
            refs.country.innerHTML = markup;
            return;
        }
        if(countries.length > 10) {
            notify()
            return;
        }
        if(countries.length < 10 && countries.length > 1) {
            const markup = countriesTpl(countries);
            refs.country.innerHTML = markup;
            return;
        }
        refs.country.innerHTML = 'No matches found'
    })
    .catch(console.log);
}

export default fetchCountries;