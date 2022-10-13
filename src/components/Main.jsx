import React, {useEffect, useState} from "react";
import {Navbar} from './'
import ListItem from "./ListItem";


const Main = () => {
  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState({})
  useEffect(() => {
    async function getPlayerData(){
      try{
        const getPlayers = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players'
        );
        const result = await getPlayers.json()
        console.log(result, "is the result")
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
