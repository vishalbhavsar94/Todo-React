import {GET_TODO,DELETE_TODO,ADD_TODO, GETEDIT_TODO, EDIT_TODO} from "./Type";
import axios from 'axios'


export const getTodos = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({
        type:GET_TODO,
        payload:res.data
    }) 
}
export const deleteTodos = id =>async dispatch => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
        type:DELETE_TODO,
        payload:id
    }) 
}
export const addTodo = Todo =>async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos/',Todo);
    dispatch({
        type:ADD_TODO,
        payload:res.data
    }) 
}
export const GeteditTodo = id =>async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
        type:GETEDIT_TODO,
        payload:res.data
    }) 
}
export const editTodo = Todo =>async dispatch => {
    const res = await axios.put('https://jsonplaceholder.typicode.com/todos/'+Todo.id,Todo);
    dispatch({
        type:EDIT_TODO,
        payload:res.data
    }) 
}
