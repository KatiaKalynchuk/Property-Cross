import * as types from '../constants/ActionTypes';
import fetchJsonp from 'fetch-jsonp';

function urlForQueryAndPage(name, value, pageNumber) {
    let data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber
    };
    data[name] = value;
    let querystring = Object.keys(data)
        .map(key => {
            return key + '=' + encodeURIComponent(data[key])
        }).join('&');
    return 'https://api.nestoria.co.uk/api?' + querystring;
}


export function search(city) {

    let url = urlForQueryAndPage('place_name', city, 1);

    return (dispatch) => {

        fetchJsonp(url)
           .then((data)=> {
               data.json().then(text => { 
                   dispatch({
                       type: types.SEARCH,
                       peyload: text.response.listings
                   }); 
                   dispatch({
                       type: types.PRELOADER,
                       peyload: false
                   });
               })
           })
           .catch(error => {
               console.log(error);
           });
    }
  
}