import React, { Component } from 'react';
import listData from './data/todo_data';


class ViewList extends Component {

    render(){
        const buttonStyling = {
            float: 'right',
            marginRight: '1vw'
        };


        const listElements = this.props.list.map((item, index)=> {
            return (
                <li className="list-group-item" key={ index } style={{backgroundColor: item.completed ? '#7E8F7C' : '#FDF3E7'}}>
                    <div className="col-md-8">
                    {`${ item.title } | completed: ${item.completed}`}
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-danger" style={buttonStyling} onClick={ () => this.props.delete(index)}>Delete</button>
                        <button className={item.completed ? 'btn btn-basic' : 'btn btn-success'} style={buttonStyling} onClick={ () => this.props.complete(index)}>{item.completed ? 'Restore' : 'Complete'}</button>
                    </div>
                    </li>

            );
        });


        // console.log(this.props);
        //
        //
        // const removedElements = this.props.deleted.map((item, index) => {
        //     return (
        //         <li className="list-group-item" key={ index }>
        //             <div className="col-md-8">
        //                 {`${ item.title } | completed: ${item.completed}`}
        //             </div>
        //             <div className="col-md-4">
        //                 <button className="btn btn-outline-danger" style={buttonStyling} onClick={ () => this.props.delete(index)}>Delete</button>
        //                 <button className={item.completed ? 'btn btn-outline-basic' : 'btn btn-outline-success'} style={buttonStyling} onClick={ () => this.props.complete(index)}>{item.completed ? 'Restore' : 'Complete'}</button>
        //             </div>
        //         </li>
        //
        //     );
        // });



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