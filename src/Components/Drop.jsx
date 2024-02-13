
const Drop = ({region}) => {
  return (
    <select className="border-4 border-black rounded-lg p-2 bg-transparent" onChange={(e) => region(e.target.value)}>
        <option className="bg-[#313131] rounded-xl text-[#f0fff8]" value="" hidden>Filter by Area</option>
        <option className="bg-[#313131] rounded-xl text-[#f0fff8]" value="Africa">Africa</option>
        <option className="bg-[#313131] rounded-xl text-[#f0fff8]" value="America">America</option>
        <option className="bg-[#313131] rounded-xl text-[#f0fff8]" value="Asia">Asia</option>
        <option className="bg-[#313131] rounded-xl text-[#f0fff8]" value="Europe">Europe</option>
        <option className="bg-[#313131] rounded-xl text-[#f0fff8]" value="Oceania">Oceania</option>
    </select>
  )
}

export default Drop