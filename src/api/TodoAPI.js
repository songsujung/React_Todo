import axios from "axios"


export const getList = async() => {
    const res = await axios.get(`http://localhost:8080/api/todos/list`)

    return res.data
} // async와 await는 세트

export const postTodo = async(todo) => {
    const res = await axios.post(`http://localhost:8080/api/todos/`,todo)

    return res.data
}

export const getTodo = async(tno) => {
    const res = await axios.get(`http://localhost:8080/api/todos/${tno}`)
    
    return res.data
}

export const removeTodo = async(tno) => {
    const res = await axios.delete(`http://localhost:8080/api/todos/${tno}`)
    
    return res.data
}

export const putTodo = async (todo) => {
    const res = await axios.put(`http://localhost:8080/api/todos/${todo.tno}`, todo)

    return res.data
}