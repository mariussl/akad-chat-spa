import React from "react";
import {apiRoomUrl} from "../constants";

class RoomSelect extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         roomList: []
      }
   }

   componentDidMount() {
      fetch(apiRoomUrl)
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