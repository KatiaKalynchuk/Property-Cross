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
        dispatch({
            type: types.ERROR,
            payload: null
        }); 
        fetchJsonp(url)
           .then((data)=> {
               return data.json();
           }).then(text => {
               const unkLocation = 'unknown location';
               if(text.response.application_response_text != unkLocation) { 
                   dispatch({type: types.SEARCH,payload: text.response.listings}); 
                   dispatch({type: types.ERROR,payload: ''}); 
                   dispatch({type: types.PRELOADER, payload: false})
                   dispatch({type: types.RECENT_SEARCHES, payload: city})
                   
               } else {
                   dispatch({type: types.ERROR,payload: 'Unknown location'
                   });
                   dispatch({type: types.LOCATION,payload: []}); 
                   dispatch({type: types.PRELOADER, payload: false})
               }
           })
           .catch(error => {
               dispatch({type: types.ERROR,payload: error}); 
           });
    }
}

export function getLocation () {
    let url = urlForQueryAndPage('place_name', 'london', 1);

    return (dispatch) => { 
        fetchJsonp(url)
           .then((data)=> {
               return data.json();
           }).then(text => { 
               dispatch({type: types.LOCATION,payload: text.response.locations}); 
               dispatch({type: types.ERROR,payload: ''}); 
               dispatch({type: types.PRELOADER, payload: false})
           })
    }
}

export function addFaves (data) {
    return {type: types.ADD_TO_FAVES, payload: data}
}
export function removeFaves (data) {
    return {type: types.REMOVE_FROM_FAVES, payload: data}
}

export function preloader (data) {
    return {type: types.PRELOADER, payload: data}
}
