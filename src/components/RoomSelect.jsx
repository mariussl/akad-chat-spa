import React from "react";

class RoomSelect extends React.Component {
   render() {
      return (
         <select className="form-control" name="room" id="room" aria-describedby="room-help">
            <option selected>Wohnzimmer</option>
            <option>Allgemein</option>
         </select>
      )
   }
}