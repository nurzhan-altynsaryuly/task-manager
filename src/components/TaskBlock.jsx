import TaskItem from "./TaskItem"
import { useSelector } from "react-redux"

export default function TaskBlock({block}) {
    const tasks = useSelector(state => state.tasks.tasks)
    return (
        <div className="p-5 bg-gray-700 rounded-md text-amber-50 font-bold">
            <p className="font-['Inter']">{block == 'open' ? 'Open' : block == 'progress' ? 'In Progress' : 'Done'}</p>
            {tasks.filter(task => task.status == block).length ? tasks.filter(task => task.status == block).map((task,idx) => (
                <TaskItem key={idx} data={task}/>
            )) : <p className="font-normal mt-5">There is not a tasks!</p>}
        </div>
    )
}