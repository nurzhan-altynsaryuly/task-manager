import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        createTask(state, action) {
            state.tasks.push(action.payload)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        changeStatus(state, action) {
            state.tasks = state.tasks.map((task) => {
                if(task.task != action.payload.task) return task
            
                return {
                    task: action.payload.task,
                    user: action.payload.user,
                    status: action.payload.status
                }
                })
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(task => task.task !== action.payload)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        loadTasks(state) {
            const data = JSON.parse(localStorage.getItem('tasks'))
            data ? state.tasks = data : state.tasks = []
        }
    }
})
  
export const { createTask, changeStatus, deleteTask, loadTasks } = taskSlice.actions
export default taskSlice.reducer