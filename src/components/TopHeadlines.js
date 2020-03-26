import React from 'react'
import useRetrive from '../services/useRetrive';

const TopHeadlines = (selectedCountry) => {
    const selectedCountryISO2 = selectedCountry.selectedCountry.iso2.toLowerCase();
    const [newsData, newsLoading] = useRetrive(
        `https://newsapi.org/v2/top-headlines?country=${selectedCountryISO2}&language=en&apiKey=cfb62427f6e64c3289079c33520dffe6`
    )
    
    return (
        <>
            {
                newsLoading ? `Loading top headlines ${selectedCountry.selectedCountry.name}` : (
                    <>
                        {
                            newsData && newsData.articles.length > 0 ? (
                                newsData.articles.map((item, index) => {
                                    return (                                        
                                        <div key={index}>
                                            <a className="underline hover:no-underline" rel="noopener noreferrer" href={item.url} target="_blank" >{item.title}</a>
                                        </div>
                                    )
                                }) 
                            ) : 'Headlines are not available at this moment..'
                        }
                    </>

                )
            }
            
        </>
    )
}

export default TopHeadlines