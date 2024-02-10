import { MdDarkMode } from "react-icons/md";
// import { MdLightMode } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-green-700 text-white flex items-center justify-between p-4">
        <h1 className="text-4xl">Where is the world?</h1>
        <div className="flex items-center gap-2 text-2xl">
            <MdDarkMode />
            <h1>Dark</h1>
        </div>
    </div>
  )
}

export default Header