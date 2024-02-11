import { useEffect, useState } from 'react'
import Card from './Card'
import Drop from './Drop'
import Search from './Search'
import CardSkel from './CardSkel'

const Home = () => {
    const [query, setQuery] = useState("")
    const [region, setRegion] = useState("")
    const [data, setData] = useState([])
    const arr = data.filter((country) => country.name.common.toLowerCase().includes(query)).filter((country) => country.region.includes(region)).map((country) => (<Card key={country.name.common} name={country.name.common} popu={country.population.toLocaleString('en-IN')} img={country.flags.png} region={country.region} capi={country.capital} />))
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
    }, [])

    return (
        <div>
            <div className='pl-20 pr-20 flex justify-between items-center mt-4 text-xl'>
                <Search search={setQuery} />
                <Drop region={setRegion} />
            </div>
            <div className='flex flex-wrap gap-6 mt-12 ml-4 mr-4 justify-center'>
                {!arr.length ? <CardSkel /> : arr}
            </div>
        </div>
    )
}

export default Home