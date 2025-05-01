import { Link } from "react-router"

export default function TaskItem({data}) {
    return (
        <div className="p-2 bg-gray-600 rounded-md mt-2 flex justify-between items-center">
            <div>
            <p className="font-light font-['Inter']">{data.task}</p>
            <div className="font-light font-['Inter'] text-xs px-2 bg-gray-500 rounded-sm mt-1 w-max">{data.user}</div>
            </div>
            <Link to='/taskPage' state={data}>
                <button className="font-light font-['Inter'] border-1 border-solid rounded-md text-1xl px-3 text-sm py-1 hover:cursor-pointer hover:bg-amber-50 hover:text-black transition duration-300">Open</button>
            </Link>
        </div>
    )
}