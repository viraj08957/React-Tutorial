import React from "react";

const TodoList = (props) => {


    return (
        <>
            <div className="todo_style">
                     <i class="fa-regular fa-circle-xmark"></i>
                     <li>{props.onSelect}</li>
                
            </div>
        </>

    );
};
export default TodoList;