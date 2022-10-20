import React from "react";
import { useEffect, useState } from "react";

const SinglePuppy = ({ puppyId, getPlayer }) => {

  const [dogSing, setDogSing] = useState("0")
  const [stopitplease, setstopitplease] = useState("")
 

  async function getThePup(){
      const thePup = getPlayer(puppyId)
      
      setstopitplease("ok")
      return thePup
    }

    setDogSing(getThePup(puppyId))
    //console.log(dogSing.data.player.breed, "AAAAAAAAAAAAA")
 console.log(stopitplease)

if (stopitplease === "ok") {
  return (
    <div>
      <div>test test test</div>
      <div>{puppyId}</div>
      <div>{dogSing.data.player.breed}</div>
      
    </div>
  );
}
};

export default SinglePuppy;
