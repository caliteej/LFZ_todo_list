import React from 'react';
import todoData from './data/todo_data';
import ViewAll from './view_all';
import AddForm from './add_form';
import ViewOne from './view_one';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = () => (
    <Router>
    <div className="container">
        <h1>To Do List</h1>
        <Link className="btn btn-outline-success" to="/add-todo">Add Todo Item</Link>

        <Route exact path="/" component={ViewAll}/>
        <Route path="/add-todo" component={AddForm}/>
        <Route path="/todo" component={ViewOne}/>
    </div>
    </Router>
);

export default App;
