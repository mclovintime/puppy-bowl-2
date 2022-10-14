import React from "react";
import { Main } from ".";

const ListItem = (props) => {
  function panelClick(event) {
    setSelectedPlayer(player);
    console.log("test");
  }
  {
    return (
      <div id="table">
        {props.players.length ? (
          props.players.map((puppy) => {
            console.log(puppy, "is puppy output");
            return (
              <div onClick={() => puppy.SelectedPlayer(puppy.id)} id="panel">
                <div id="name">
                  <b>{puppy.name}</b>
                </div>
                <img class="puppyImage" src={puppy.imageUrl} />
                <div id="id">
                  <i>
                    <b>{`#${puppy.id}`}</b>
                  </i>
                </div>
              </div>
            );
          })
        ) : (
          <div>loading puppies...</div>
        )}
      </div>
    );
  }
};

export default ListItem;
