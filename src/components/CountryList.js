import React from 'react'
import { LocalStorage } from '../services/LocalStorage';
import useRetrive from '../services/useRetrive';
import TrackCard from './TrackCard';
import TopHeadlines from './TopHeadlines'
import { formatDistanceToNow, format } from 'date-fns';


const CountryStats = () => {
    const [selectedCountry, setSelectedCountry] = LocalStorage('country-selected', {});
    const [countryData, countryLoading, cError] = useRetrive(
        `https://covid19.mathdro.id/api/countries/${selectedCountry.name}`
    )
    const [countries] = useRetrive(
        'https://covid19.mathdro.id/api/countries'
    )
    const handleCountrySelection = (e) => {
        setSelectedCountry(JSON.parse(e.target.value))
    }

    console.log(selectedCountry)
    return (
      <div className="CountryStats neumorph sm:shadow-neumorph-inset mb-6  p-0">
        <select
          className="text-gray-900 w-full p-2 md:p-3 rounded-md mb-6 md:text-xl bg-primary text-back"
          disabled={countryLoading}
          onChange={handleCountrySelection}
          value={JSON.stringify(selectedCountry)}
        >
          <option value="{}"></option>
          { countries &&
            countries.countries.map((country) => {
              return (
                <option
                  key={country.name}
                  value={JSON.stringify(country)}
                >
                  {country.name}
                </option>
              )
            })}
        </select>

        <div className="flex justify-center sx-2 sm:sx-5">
          {cError.length > 0 && (
            <div className="text-center text-gray-500 ">
              <div className="font-sans text-5xl mb-3">¯\_(ツ)_/¯</div>
              <div>{cError}</div>
            </div>
          )}
          {cError.length === 0 && (
            <>
              <TrackCard
                title="Confirmed Cases"
                value={countryLoading ? undefined : countryData?.confirmed.value}
              />
              <TrackCard
                title="Recovered Cases"
                value={countryLoading ? undefined : countryData?.recovered.value}
              />
              <TrackCard
                title="Deaths Cases"
                value={countryLoading ? undefined : countryData?.deaths.value}
              />
            </>
          )}
        </div>
        <div className="mt-3 text-center text-muted text-center">
          <span>Last updated: </span>
          {countryData?.lastUpdate && (
            <>
              <span>{format(new Date(countryData?.lastUpdate), "MM/dd/yyyy @ hh:mma")} </span>
              <span>({formatDistanceToNow(new Date(countryData?.lastUpdate))}}</span>
            </>
          )}
        </div>
        <hr/>
        <div className="text-justify sx-2 sm:sx-5">
        <h2 className="text-2xl flex-1">Today's Top Headlines - {selectedCountry.name}</h2>
          <hr/>
          <TopHeadlines
            selectedCountry={selectedCountry}
          ></TopHeadlines>
        </div>
      </div>
    )
}

export default CountryStats
