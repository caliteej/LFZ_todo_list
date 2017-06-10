import { FETCH_ALL, GET_ONE } from '../actions/types';

const DEFAULT_STATE = { all: [], single: null};//Starting state



export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case FETCH_ALL:
            console.log("Todo reducer FETCH_ALL: ", action.payload.data.todos);
            return {...state, all: action.payload.data.todos};//new State
        case GET_ONE:
            console.log('Todo reducer GET_ONE: ', action.payload.data.todo.details);
            return {...state, single: action.payload.data.todo};
        default:
            return state;
    }
}