import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import ViewList from './view_list';
import ViewTodo from './view_todo';
import AddTodo from './add_form';

const App = () => (

    <Router>
        <div className="container">
            <h1>To Do List</h1>
            <Link to='/add-todo' className="btn btn-outline-success">Add To Do Item</Link>
            <Route exact path="/" component={ ViewList }/>
            <Route path="/todo/:id" component={ ViewTodo }/>
            <Route path="/add-todo" component={ AddTodo }/>
        </div>
    </Router>
);

export default App;
