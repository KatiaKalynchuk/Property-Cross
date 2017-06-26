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
            type: types.SEARCH_REQUEST
        }); 
        fetchJsonp(url)
           .then((data)=> {
               return data.json();
           }).then(text => {
               const unkLocation = 'unknown location';
               if(text.response.application_response_text != unkLocation) { 
                   dispatch({type: types.SEARCH_SUCCESS, payload: text.response.listings}); 
                   dispatch({type: types.RECENT_SEARCHES, payload: city})
                   
               } else {
                   dispatch({type: types.SEARCH_FAILURE,payload: 'Unknown location'
                   });
               }
           })
           .catch(error => {
               dispatch({type: types.SEARCH_FAILURE,payload: error}); 
           });
    }
}

export function getLocation () {
    let url = 'http://59502e6dce332e0011693bab.mockapi.io/location';
    
    return (dispatch) => { 
        dispatch({
            type: types.LOCATION_REQUEST
        }); 
        fetch(url)
           .then((data)=> {
               return data.json();
           }).then(text => { 
               dispatch({
                   type: types.LOCATION_SUCCESS,
                   payload: text
               }); 
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
