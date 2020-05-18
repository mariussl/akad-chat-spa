import React from 'react';

export function Logout(props) {
   return (
      <a href="" onClick={props.onLogout}>loggout {props.name}</a>
   )
}

export default Logout;