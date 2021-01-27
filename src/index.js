import './styles.css';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import '@pnotify/core/dist/BrightTheme.css';
import './sass/main.scss';



refs.input.addEventListener('input', debounce(searchCountry,500));

function searchCountry (event) {
   const value = event.target.value;
   fetchCountries(value);
   
}


