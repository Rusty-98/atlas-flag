import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Countries = () => {

  const [data, setData] = useState({})

  // const country = new URLSearchParams(location.search).get('name')
  const params = useParams();
  const country = params.country
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((response) => response.json())
      .then(([data]) => {
        setData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          img: data.flags.svg,
          population: data.population.toLocaleString('en-IN'),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
          languages: Object.values(data.languages).map((language) => language).join(', '),
          borders: [],
        });

        if (!data.borders) {
          data.borders = []
        }
        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((response) => response.json())
            .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) => {
          setData((prev) => ({ ...prev, borders }))
        })
      })
  }, [country])
  return (
    <div className="w-full h-full">
      <div className="w-fit ml-2 md:ml-12 mt-10">
        <button className="text-2xl font-bold border-4 border-black px-4 py-1 rounded-lg" onClick={() => history.back()} >Back</button>
      </div>
      <div className="flex flex-col md:flex-row mt-10 md:mt-20 px-5 gap-10 ">
        <div className="md:w-[30%]">
          <img src={data.img} alt="India" />
        </div>
        <div className='md:w-[70%] text-2xl md:text-3xl flex flex-col gap-4'>
          <h1 className='font-extrabold text-4xl md:text-5xl text-center md:text-left'>{data.name}</h1>
          <div className='flex flex-col md:flex-row md:gap-12 '>
            <div className='leading-normal'>
              <p><b>Native Name:</b> {data.nativeName}</p>
              <p><b>Population:</b> {data.population}</p>
              <p><b>Region:</b> {data.region}</p>
              <p><b>Sub Region:</b> {data.subregion}</p>
              <p><b>Capital:</b> {data.capital}</p>
            </div>
            <div className='leading-normal'>
              <p><b>Top Level Domin:</b> {data.tld}</p>
              <p><b>currencies:</b> {data.currencies}</p>
              <p><b>Language:</b> {data.languages}</p>
            </div>
          </div>
          <p className='mt-5 mb-4 md:mb-0 flex items-center flex-wrap'><b>Borders:</b> {data.borders && data.borders.length > 0 && data.borders.map((border) => <Link className='mx-1 md:mx-2 px-2 mb-1 md:px-4 py-1 md:py-2 text-xl rounded-xl border-2 border-gray-600 shadow-lg' key={border} to={`/${border}`}>{border}</Link>)}</p>
        </div>
      </div>
    </div>
  )
}

export default Countries