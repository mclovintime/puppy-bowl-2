import React from "react";

const SinglePuppy = ({ puppyId, getPlayer }) => {
  console.log(getPlayer, "get player");
  console.log(puppyId, "selected player");
  let placeHolder = getPlayer(puppyId);
  console.log(placeHolder, "this is placeHolder");
  return (
    <div>
      <div>test test test</div>
      <div>{puppyId}</div>
    </div>
  );
};

export default SinglePuppy;
