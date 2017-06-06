import React, { Component } from 'react';
import listData from './data/todo_data';
import { Link } from 'react-router-dom';

class ViewAll extends Component {

    render(){
        const listElements = listData.map((item, index) => {
            return (
                <li className="list-group-item" key={ index }>
                    <Link to='/todo'>{ item.title }</Link>
                    </li>);
            //anything can be used as the key as long as it is unique and loops through
        });



        console.log('listElements: ', listElements);
        return (
            <div>
                <h2>This is my list</h2>
                <ul className="list-group">
                    {listElements}
                    {/*if data is an array JSX will automatically loop through and dynamically create items*/}
                </ul>
            </div>
        )
    }


}

export default ViewAll;