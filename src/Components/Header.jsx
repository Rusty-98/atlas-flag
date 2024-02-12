import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header = ({ isDark, toggleDarkMode }) => {
  return (
    <div className="bg-green-700 text-white flex items-center justify-between p-4">
      <h1 className="text-4xl">Where in the world?</h1>
      <div className="flex items-center gap-2 text-2xl">
        {isDark ? (<>
          <MdDarkMode className="cursor-pointer" onClick={toggleDarkMode} />
          <h1 className="cursor-pointer" onClick={toggleDarkMode}>Dark</h1>
        </>
        ) : (<>
          <MdLightMode className="cursor-pointer" onClick={toggleDarkMode} />
          <h1 className="cursor-pointer" onClick={toggleDarkMode}>Light</h1>
        </>)}
      </div>
    </div>
  )
}

export default Header