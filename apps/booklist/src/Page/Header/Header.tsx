import { FaBookOpen } from "react-icons/fa";
function Header() {
    return (
        <div className="w-full h-32 items-center flex justify-center gap-5">
        <FaBookOpen color="yellow" size={100} />
        <h2 className="text-6xl font-semibold ">mohammad <span className="text-yellow-400">Book</span>list</h2>
        </div>
    )
}

export default Header