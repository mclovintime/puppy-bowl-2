import React from "react";
import { useEffect } from "react";

const SinglePuppy = ({ puppyId, getPlayer }) => {
  console.log(getPlayer, "get player");
  console.log(puppyId, "selected player");
  let placeHolder = getPlayer(puppyId);
  console.log(placeHolder, "this is placeHolder");
  useEffect(function () {
    async function fetchSinglePlayer() {
      await getPlayer(puppyId);
    }
  });
  return (
    <div>
      <div>test test test</div>
      <div>{puppyId}</div>
    </div>
  );
};

export default SinglePuppy;
