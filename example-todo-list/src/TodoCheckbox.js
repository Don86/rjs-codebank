import React from "react"

function TodoCheckbox(props) {
    return (
        <div className="todo-item">
            <input
            type="checkbox"
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
            />
        </div>
    )
}

export default TodoCheckbox