import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentItem = ({character}) => {
    const [residents, setResidents] = useState({})
    const [color, setColor] = useState("green")
    useEffect(()=>{
        if(character){
            axios.get(character)
            .then((res)=> setResidents({
                image: res.data.image,
                name: res.data.name,
                status: res.data.status,
                species: res.data.species,
                origin: res.data.origin.name,
                episodes: res.data.episode.length
            }))
            if(residents.status === 'Alive'){
              setColor("green");  
            } else if(residents.status === "Dead"){
                setColor("red");
            } else{
                setColor("gray")
            }
        }
    },[character, residents.status])
            

console.log(residents);     

    return (
        <li className='character-item'>
            <div className='character-card'>
                <div className='image-position'>
                    <img src={residents.image} alt="" />
                    <h3 className='title-status'><span className={"circle " + color}></span>  {residents.status}</h3>
                </div>
                <h3>{residents.name}</h3>
                <hr />
                <h3 className='title-info'>Especie <small>{residents.species}</small></h3>
                <h3 className='title-info'>Origin <small>{residents.origin}</small></h3>
                <h3 className='title-info'>episodes where appear <small>{residents.episodes}</small></h3>
            </div>
        </li>
    );
};

export default ResidentItem;