import React from "react";
import {apiRoomUrl} from "../constants";

class RoomSelect extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         roomOptions: []
      }
   }

   componentDidMount() {
      fetch(apiRoomUrl)
         .then(res => res.json())
         .then((data) => {
            this.setState({ roomOptions: data.payload.map((room => {
               if (this.props.selectedRoomname === room.name) {
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

   render() {
      return (
         <select className="form-control" name="room" id="room" aria-describedby="room-help"
            onChange={this.props.onChange}>
            {this.state.roomOptions}
         </select>
      )
   }
}

export default RoomSelect;