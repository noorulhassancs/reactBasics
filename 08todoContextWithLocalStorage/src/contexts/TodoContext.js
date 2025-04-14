import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            todoId: 1,
            todoTitle:'Todo msg',
            todoCompleted: false
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (todoId) => {},
    updateTodo: (todoId, todoTitle) => {},
    toggleComplete:(todoId) => {}
});


export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
