import React from 'react'
import precaution_1 from '../assets/fifa-who-step-1.png'
import precaution_2 from '../assets/fifa-who-step-2.png'
import precaution_3 from '../assets/fifa-who-step-3.png'
import precaution_4 from '../assets/fifa-who-step-4.png'
import precaution_5 from '../assets/fifa-who-step-5.png'

const Footer = () => {
    return (
        <>
            <div className="Footer mt-2 text-xs text-muted text-center">
                <div className="flex mb-4">
                    <div className="flex-1 h-15 px-2"><img src={precaution_1} alt="precaution 1 by WHO"/></div>
                    <div className="flex-1 h-15 px-2"><img src={precaution_2} alt="precaution 2 by WHO"/></div>
                    <div className="flex-1 h-15 px-2"><img src={precaution_3} alt="precaution 3 by WHO"/></div>
                    <div className="flex-1 h-15 px-2"><img src={precaution_4} alt="precaution 4 by WHO"/></div>
                    <div className="flex-1 h-15 px-2"><img src={precaution_5} alt="precaution 5 by WHO"/></div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-2">
                    <div><a className="underline hover:no-underline" target="_blank" rel="noopener noreferrer" href="https://www.who.int/news-room/detail/23-03-2020-pass-the-message-five-steps-to-kicking-out-coronavirus">Five steps to kicking out coronavirus</a></div>
                    <div className="hidden md:inline-block px-1">|</div>
                    <div><a className="underline hover:no-underline" target="_blank" rel="noopener noreferrer" href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd">Status by WHO</a></div>
                    <div className="hidden md:inline-block px-1">|</div>
                    <div>Powered By <a className="underline hover:no-underline" rel="noopener noreferrer" href="https://github.com/mathdroid/covid-19-api">COVID-19 API</a></div>
                    <div className="hidden md:inline-block px-1">|</div>
                    <div>
                        In your service by <a className="underline hover:no-underline" rel="noopener noreferrer" href="https://www.linkedin.com/in/abhijit-prakash-gawankar-45107170/" target="_blank" rel="noopener noreferrer">Abhijit Pramila Prakash Gawankar</a>
                        <div className="md:hidden inline-block px-1">|</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
