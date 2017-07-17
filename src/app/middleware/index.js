 import fetchJsonp from 'fetch-jsonp';
 import * as types from '../constants/ActionTypes';

 /*eslint-disable */
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

export let requestApi = (store) => (next) => (action) => {
   
    if (action.type !== types.SEARCH_REQUEST) {
        return next(action);
    }
    const {REQUEST, SUCCESS, FAILURE} = types;
    
    let url;
    if(action.city) {
        url = urlForQueryAndPage('place_name', action.city, 1);
    }
   
    next({type: REQUEST });
    
    fetchJsonp(url)
        .then((data)=> {
            return data.json();
        }).then((text) => {
            const unkLocation = 'unknown location';
            if(text.response.application_response_text != unkLocation) { 
                next({type: SUCCESS, payload: text.response.listings}); 
                next({type: types.RECENT_SEARCHES, payload: action.city})
                
            } else {
                next({type: FAILURE,payload: 'Unknown location'
                });
            }
        })
        .catch(error => {
            next({type: FAILURE,payload: error}); 
        });
} 

export let requestLocation = (store) => (next) => (action) => {

    let url = 'http://59502e6dce332e0011693bab.mockapi.io/location';
    const {LOCATION_SUCCESS, LOCATION_REQUEST, LOCATION_FAILURE} = types;

    if (action.type !== types.LOCATION_REQUEST) {
        return next(action);
    }

    next({type: LOCATION_REQUEST}); 
    fetch(url)
        .then((data)=> {
            return data.json();
        }).then(text => { 
            next({type: LOCATION_SUCCESS,payload: text}); 
        }).catch((error) => {
            next({type: FAILURE,payload: error});
        })
}




