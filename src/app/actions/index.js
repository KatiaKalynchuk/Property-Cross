import fetchJsonp from 'fetch-jsonp';

import * as types from '../constants/ActionTypes';

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
                       payload: text.response.listings
                   }); 
                   dispatch({
                       type: types.PRELOADER,
                       payload: false
                   });
               })
           })
           .catch(error => {
               dispatch({
                   type: types.ERROR,
                   payload: error
               }); 
           });
    }
  
}

export function addFaves (data) {
    return {type: types.ADD_TO_FAVES, payload: data}
}
