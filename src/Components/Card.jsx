import { Link } from "react-router-dom"


const Card = ({ name, popu, region, capi, img }) => {
  return (
    <Link to={`/${name}`} className="w-64 h-auto bg-slate-400 overflow-hidden border-4 border-cyan-500 rounded-lg cursor-pointer hover:border-red-500 hover:scale-[1.02] ease-in-out">
      <img src={img} alt="Photo" className="h-40 w-full object-cover bg-center" />
      <div className="bg-slate-400 p-4">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-xl">Population : {popu}</p>
        <p className="text-xl">Region : {region}</p>
        <p className="text-xl">Capital : {capi} </p>
      </div>
    </Link>
  )
}

export default Card