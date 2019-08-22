import React, { Component } from 'react'
import { observer } from "mobx-react"

import Todo from './Todo'

@observer
class TodoList extends Component {
    handleDelete = (id) => {
        let { store } = this.props;
        store.deleteTodo(id);
        console.log("ssssssssssss")
    }

    render() {
        let { store } = this.props;
        return (
            <div>
                <button onClick={() => store.addTodo({id:Math.random(), content: "New"})}>Add</button>
                {store.todos.map(
                    (item, index) => {
                        return <Todo onDelete={()=>this.handleDelete(item.id)} item={item} key={index}/>
                    }

                )}
            </div>
        )
    }
}

export default TodoList;
