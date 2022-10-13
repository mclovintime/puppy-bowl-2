import React, {useEffect} from "react";
import {Navbar} from './'

const Main = () => {
  useEffect(() => {
    async function getPlayerData(){
      try{
        const getPlayers = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players'
        );
        const result = await getPlayers.json()
        console.log(result)
      } catch(err){
        console.error(err)
      }
    }
    getPlayerData()
  }, [])

  return (
    <div id="main">
    <Navbar/>
  </div>
  );
};

export default Main;
