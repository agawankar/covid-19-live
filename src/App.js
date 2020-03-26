import React from 'react';
import WorldWideStatus from './components/WorldWideStatus';
import CountryList from './components/CountryList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App md:flex md:justify-center min-h-screen p-4">
      <div className="md:w-7/12">
      <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
        <p className="font-bold">About</p>
        <p className="text-sm">
          Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.
          The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.
        </p>
        <hr/>
        <p className="font-bold">HOW IT SPREADS</p>
        <p className="text-sm">
          Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.
        </p>
        <hr/>
        <p><a rel="noopener noreferrer" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" >Learn more on who.int</a></p>
      </div>
        <Header/>
        <hr/>
        <WorldWideStatus />
        <hr/>
        <CountryList />
        <hr/>
        
        <hr/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
