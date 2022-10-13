import React from "react";

const ListItem = (props) => {
  {
    return (
      <div id="table">
        {props.players.length ? (
          props.players.map((puppy) => {
            console.log(puppy, "is puppy output");
            return (
              <div id="panel">
                <div>{puppy.name}</div>
                <div>{puppy.id}</div>
                <img class="puppyImage" src={puppy.imageUrl} />
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
