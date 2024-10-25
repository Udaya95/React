import React from "react";

const TodoList =({todoslist,deleteH}) =>{
    return (
        <div>
            {todoslist.map((todo,index)=>
            <div key={index}>
                <h5>{todo} &nbsp; <button onClick={ () => deleteH(index)}>Delete</button></h5>
            </div>)}
        </div>
    )
}

export default TodoList

