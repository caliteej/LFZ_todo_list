import { FETCH_ALL, GET_ONE, DELETE_ONE } from './types';
import axios from 'axios';


const BASE_URL = 'http://api.scottbowlerdev.com';
const API_KEY = '?key=c417tkinion';

//fetch_all is the Action Creator
export function fetch_all(){
    const request = axios.get(`${BASE_URL}/todos${API_KEY}`);
//action
    return {
        type: FETCH_ALL,
        payload: request
    }

}

export function get_one(id){
    const request = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: GET_ONE,
        payload: request
    }
}

export function delete_one(id){
    const request = axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: DELETE_ONE,
        payload: request
    }
}

