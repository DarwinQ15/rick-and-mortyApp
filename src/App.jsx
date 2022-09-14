import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import ResidentItem from './components/ResidentItem'
import InfoResident from './components/InfoResident'
import Footer from './components/Footer'

function App() {
  const [character, setCharacter] = useState({});
  const [location, setLocation] = useState('');

  const randomId = Math.floor(Math.random() * 126) + 1

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then((res) =>{
      setCharacter({
        name: res.data.name,
        type: res.data.type,
        dimension: res.data.dimension,
        population: res.data.residents.length,
        residents: res.data.residents
      });
    });
  },[])
  console.log(character);


  
  const searchTypeLocation=()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${location}`)
    .then(res => setCharacter({
      name: res.data.name,
      type: res.data.type,
      dimension: res.data.dimension,
      population: res.data.residents.length,
      residents: res.data.residents
    }))
  }

  // console.log(location);
  return (
    <div className="App">
      <div className='banner'>
        <h1 className='title-banner'>Rick and Morty</h1>
      </div>
      <div className='info-search'>
        <input type="text" value={location} placeholder="Type a location id" onChange={e => setLocation(e.target.value)}/>
        <button onClick={searchTypeLocation}><i class='bx bx-search'></i></button>
      </div>
        <InfoResident name={character.name} type={character.type} dimension={character.dimension} population={character.population} key={character} />
      <h3 className='title-resident-principal'>Residents</h3>
      <ul className='character-container'>
     {
        character.residents?.map((character) => (
          // <li key={character}>
          //   {character}
          // </li>
          <ResidentItem character={character} key={character}/>
        ))
      }  
      </ul>
      <Footer />
    </div>
  )
}

export default App
