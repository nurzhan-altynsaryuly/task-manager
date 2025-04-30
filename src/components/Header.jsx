import { Link } from "react-router"

export default function Header() {
    
    return (
        <div className="w-100% h-max p-10 bg-gray-700 rounded-md flex justify-between">
            <p className='text-5xl font-medium font-["Inter"] text-left text-amber-50'>Task Manager</p>
            <Link to='/addTask'>
                <button className="
                text-amber-50 
                px-8 py-2 
                border-1 
                border-solid 
                rounded-md 
                hover:bg-amber-50 
                hover:text-black 
                hover:cursor-pointer 
                transition-all 
                duration-300"
                >Add new task</button>
            </Link>
        </div>
    )
}