import React, { Component } from 'react';
import { connect } from 'react-redux';
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

                <ul className='list-group'>
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