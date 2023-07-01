import React from "react";
function  MyComponentWithWrapper({name}) {
     return(
        <div style={{backgroundcolor: 'lightgray' ,padding: '20px'}}>         
          {name}

        </div>
     )
}
function Wrapper() {
    return <MyComponentWithWrapper name="meghali"/>
}
export default Wrapper;