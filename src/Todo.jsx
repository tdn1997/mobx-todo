import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Todo extends Component {
    onClickMe = () => {
        this.props.onDelete()
    }

    render() {
        let { item } = this.props
        return (
            <div>
                <h5 onClick={this.onClickMe}>{item.id}-{item.content}</h5>
            </div>
        )
    }
}

export default Todo;