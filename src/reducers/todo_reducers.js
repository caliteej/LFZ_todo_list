import { FETCH_ALL } from '../actions/types';

const DEFAULT_STATE = { all: [], single: null};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case FETCH_ALL:
            return state;
        default:
            return state;
    }
}