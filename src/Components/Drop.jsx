
const Drop = ({region}) => {
  return (
    <select className="border-4 border-black rounded-lg p-2" onChange={(e) => region(e.target.value)}>
        <option value="">Filter by Area</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}

export default Drop