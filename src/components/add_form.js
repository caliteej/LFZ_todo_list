import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { add_todo } from '../actions/index';

class AddForm extends Component {

    onFormSubmit(vals){
        console.log('form submitted', vals);
        //upon response from the server (middleware) we then redirect back to the DOM/New State
        this.props.add_todo(vals).then( () => {
            //console.log('Ready to redirect', this.props.history)
            this.props.history.push('/');//just used the "/" to send us back home, if we wanted to go anywhere else we just choose a different route
        })
    }

    render(){
        const { handleSubmit } = this.props;

        return(
        <div>
            <Link to="/" className="btn btn-outline-primary">Go Back</Link>
            <h1>Add a To Do Item</h1>
            <div className="col-md-6">
                <form onSubmit={ handleSubmit( (values) => this.onFormSubmit(values) ) }>
                    <div className="form-group">
                        <label>Title:</label>

                        <Field
                            className="form-control"
                            name="title"
                            component="input"
                            type="text"
                            placeholder="To Do Item Title"
                        />
                    </div>
                    <div className="form-group">
                        <label>Details:</label>
                        <Field
                            className="form-control"
                            name="details"
                            component="input"
                            type="text"
                            placeholder="Details of To Do Item"
                        />
                    </div>
                    <button className="btn btn-outline-success">Add To Do Item</button>
                </form>
            </div>
        </div>
        )
    }
}

AddForm = reduxForm({
    form: 'add-form'
})(AddForm);

//calls itself the first time adding in the object, the second time it calls itself again
//reduxForm is a higher order component

export default connect(null, { add_todo })(AddForm);
//first parameter a function that returns our state being added to our props
//second parameter is adding an action to our props