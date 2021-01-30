import refs from './refs';
import countriesTpl from '../tamplates/countries.hbs';
import countryTpl from '../tamplates/country.hbs';
import error from './notify'

function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    fetch(url)
    .then(article => {
        if(article.status === 404) {
            error('Not match found');
            return;
        }
        return article.json()
    })
    .then(countries => {
        if(countries === undefined) {return}
        if(countries.length === 1) {
            const markup = countryTpl(countries);
            refs.country.innerHTML = markup;
            return;
        }
        if(countries.length > 10) {
            error('Too many matches found. Please enter a more specific query!');
            return;
        }
        
        const markup = countriesTpl(countries);
        refs.country.innerHTML = markup;
    })
    .catch( error => console.log(error))
}

export default fetchCountries;