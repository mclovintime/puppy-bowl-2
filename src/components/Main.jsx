import React, {useEffect, useState} from "react";
import {Navbar} from './'
import ListItem from "./ListItem";


const Main = () => {
  const getPlayer = async(playerId) => {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${playerId}`)
    const pup = await response.json();
    setSelectedPlayer(pup)
  } 
  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState({})
  console.log(selectedPlayer)

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

  return (
    <div id="main">
    <Navbar/>
    <div id="list">
      <ListItem players={players}></ListItem>
    </div>
  </div>
  );
};

export default Main;
