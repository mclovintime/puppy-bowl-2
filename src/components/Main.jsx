import React, {useEffect, useState} from "react";
import {Navbar} from './'
import ListItem from "./ListItem";
import SinglePuppy from "./SinglePuppy";


const Main = () => {
  const getPlayer = async(playerId) => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${playerId}`)
    const pup = await response.json();
     setCurrentSinglePuppy(pup)
    return pup
  } 
  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(0)
  const [currentSinglePuppy, setCurrentSinglePuppy]= useState({})

  
  useEffect(() => {
    async function getPlayerData(){
      try{
        const getPlayers = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players'
        );
        const result = await getPlayers.json()
        
        const fetchedPlayers = result.data.players
        setPlayers(fetchedPlayers)
      } catch(err){
        console.error(err)
      }
    }


    getPlayerData()
  }, [])

  

  console.log(selectedPlayer, "is selected player")
  return (
    <div id="main">
    <Navbar/>
    <div id="list">
    
      {selectedPlayer > 0 ? <SinglePuppy puppyId={selectedPlayer} getPlayer={getPlayer}/> : <ListItem players={players} setSelectedPlayer={setSelectedPlayer}></ListItem>}
    
      
      
    </div>
  </div>
  );
  
};


export default Main;
