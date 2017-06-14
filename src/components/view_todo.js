import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { get_one, delete_one, toggle_complete } from '../actions/index'; this also imports the same files as the one below
import * as actions from '../actions/index';

class ViewTodo extends Component {

    componentDidMount(){
        console.log('ViewTodo props: ', this.props.match.params.id);
        this.props.get_one(this.props.match.params.id);
    }

    delete_one(){
        this.props.delete_one(this.props.match.params.id).then(() => {
            this.props.history.push('/');
        });
    }

    handleComplete() {
        console.log('Toggle complete clicked');
        this.props.toggle_complete(this.props.todo._id);
    }

    render(){
        console.log('Single Todo: ', this.props.todo);

        const { todo } = this.props;

        if(!todo){
            return <h1>Loading...</h1>
        }

        return(
            <div>
                <Link to="/" className="btn btn-outline-primary">Back To List</Link>

                <h1>Title: { todo.title }</h1>
                <h2>Details: { todo.details } </h2>
                <p>Item { todo.completed ? 'Completed' : 'Not Completed' }</p>
                <button className={`btn btn-outline-${todo.completed ? `danger` : `info`}`} onClick={ () => this.handleComplete() }>{ todo.completed ? 'Restore' : 'Complete' }</button>
                <button className="btn btn-danger" onClick={ () => {
                    this.delete_one();
                }
                }>Delete</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, actions)(ViewTodo);