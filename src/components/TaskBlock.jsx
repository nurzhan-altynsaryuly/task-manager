import TaskItem from "./TaskItem"

export default function TaskBlock({block, data}) {
    return (
        <div className="p-5 bg-gray-700 rounded-md text-amber-50 font-bold">
            <p className="font-['Inter']">{block == 'open' ? 'Open' : block == 'progress' ? 'In Progress' : 'Done'}</p>
            {data.filter(task => task.status == block).length ? data.filter(task => task.status == block).map((task,idx) => (
                <TaskItem key={idx} data={task}/>
            )) : <p className="font-normal mt-5">There is not a tasks!</p>}
        </div>
    )
}