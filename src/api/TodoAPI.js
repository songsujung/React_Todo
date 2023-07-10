import axios from "axios"

// async : 비동기함수로 선언(작업이 완료될 때까지 대기할 수 있는 기능 제공), 항상 Promise의 결과값 반환
// await : Promise를 처리하고, 결과 반환
// async와 await는 세트
// 목록
export const getList = async() => {
    const res = await axios.get(`http://localhost:8080/api/todos/list`)

    return res.data
} 

// 등록
export const postTodo = async(todo) => {
    const res = await axios.post(`http://localhost:8080/api/todos/`,todo)

    return res.data
}

// 조회
export const getTodo = async(tno) => {
    const res = await axios.get(`http://localhost:8080/api/todos/${tno}`)
    
    return res.data
}

// 삭제
export const removeTodo = async(tno) => {
    const res = await axios.delete(`http://localhost:8080/api/todos/${tno}`)
    
    return res.data
}

// 수정
export const putTodo = async (todo) => {
    const res = await axios.put(`http://localhost:8080/api/todos/${todo.tno}`, todo)

    return res.data
}