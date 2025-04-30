import Header from "./components/Header"
import TaskBlockList from "./components/TaskBlockList"
import TaskBlock from "./components/TaskBlock"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadTasks } from "./store/taskSlice"

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTasks())
  }, [])

  return (
    <>
      <Header />
      <TaskBlockList>
          <TaskBlock block='open'/>
          <TaskBlock block='progress'/>
          <TaskBlock block='done'/>
       </TaskBlockList>
    </>
  )
}