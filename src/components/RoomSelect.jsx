import React from "react";
import apiUrl from "../constants";

class RoomSelect extends React.Component {
   state = {
      roomList: []
   }

   componentDidMount() {
      console.log("didmount");
      fetch(apiUrl + "/room.php")
         .then(res => res.json())
         .then((data) => {
            this.setState({ roomList: data.payload })
         })
         .catch(console.log)
   }

   render() {
      return (
         <select className="form-control" name="room" id="room" aria-describedby="room-help">
            {this.state.roomList.map(room => (
               <option key={room.name.toLowerCase()}>{room.name}</option>
            ))}
         </select>
      )
   }
}

export default RoomSelect;