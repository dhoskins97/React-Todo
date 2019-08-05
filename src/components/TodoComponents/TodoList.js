// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';


class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            {this.props.listStorage.map((listItem) => {
                return <div>{listItem.title}</div>
            })}
            </>
        )
    }
}

export default TodoList;