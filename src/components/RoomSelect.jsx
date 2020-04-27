import React from "react";
import {apiRoomUrl} from "../constants";

class RoomSelect extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         roomOptions: []
      }
      this.onRoomnameChange = this.onRoomnameChange.bind(this);
   }

   componentDidMount() {
      fetch(apiRoomUrl)
         .then(res => res.json())
         .then((data) => {
            let selectedRoomname = this.props.selectedRoomname;
            this.setState({ roomOptions: data.payload.map((room => {
               if (selectedRoomname === "") {
                  selectedRoomname = room.name;
               }
               if (selectedRoomname === room.name) {
                  this.props.onChange(room.name);
                  return (
                     <option key={room.name} value={room.name} selected>
                        {room.name}
                     </option>
                  )
               } else {
                  return (
                     <option key={room.name} value={room.name}>
                        {room.name}
                     </option>
                  )
               }
            }))})
         })
         .catch(console.log)
   }

   onRoomnameChange(event) {
      this.props.onChange(event.target.value);
   }

   render() {
      return (
         <select className="form-control" name="room" id="room" aria-describedby="room-help"
            onChange={this.onRoomnameChange}>
            {this.state.roomOptions}
         </select>
      )
   }
}

export default RoomSelect;