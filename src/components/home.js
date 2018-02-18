import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTodos } from "../actions";

class Home extends Component{

    componentDidMount(){
        this.props.getAllTodos();
    }


    render(){
        const listItems = this.props.todoList.map((v,i)=>{
            return <li className="list-group-item" key={i}>{v.title}</li>
        });
        return (
            <div>
                

                <div className="text-center">
                    <h1>To Do List</h1>
                    <p>Now with Redux</p>
                </div>

                <div className="row justify-content-end my-4">
                    <Link className="btn btn-outline-primary" to="/add-item">Add Item</Link>
                </div>

                <ul className='row list-group'>
                    {listItems}
                </ul>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        todoList: state.todo.all
    }
}

export default connect(mapStateToProps, { getAllTodos })(Home);