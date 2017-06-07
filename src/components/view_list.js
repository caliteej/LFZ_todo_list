import React, { Component } from 'react';
import listData from './data/todo_data';


class ViewList extends Component {

    render(){
        const listElements = this.props.list.map((item, index)=> {
            return (
                <li className="list-group-item" key={ index }>
                    {`${ item.title } | completed: ${item.completed}`}
                    <button onClick={ () => this.props.delete(index)}>Delete</button>
                    <button onClick={ () => this.props.complete(index)}>{item.completed ? 'Restore' : 'Complete'}</button>
                    </li>
            //anything can be used as the key as long as it is unique and loops through

            );
        });


        return (
            <div>
                <ul className="list-group">
                    {listElements}
                    {/*if data is an array JSX will automatically loop through and dynamically create items*/}
                </ul>
            </div>
        )
    }


}

export default ViewList;