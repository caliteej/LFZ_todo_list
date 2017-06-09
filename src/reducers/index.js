import { combineReducers } from 'redux';
import todoReducer from './todo_reducers';


const rootReducer = combineReducers({
    todos: todoReducer

});

export default rootReducer;