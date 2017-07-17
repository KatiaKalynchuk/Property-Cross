import fetchJsonp from 'fetch-jsonp';

import * as types from '../constants/ActionTypes';


export function addFaves (data) {
    return {type: types.ADD_TO_FAVES, payload: data}
}
export function removeFaves (data) {
    return {type: types.REMOVE_FROM_FAVES, payload: data}
}

export function preloader (data) {
    return {type: types.PRELOADER, payload: data}
}

export function search(city) {
    return {type: types.SEARCH_REQUEST, city}
}

export function getLocation () {
    return {type: types.LOCATION_REQUEST}
}
