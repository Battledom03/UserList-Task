import React from "react";

const Table = (props) => {
    const mainDiv = {
        display:"flex" ,
         justifyContent: "space-between",
         width: "47%"
    }

    const subDiv = {
       margin:"auto 0"
      
    }
    
    return (
        <>
            
                <div style={mainDiv}>
                    <div style={subDiv}> <img src={props.avatar} width={"140px"} /> </div>
                    <div style={subDiv}> {props.email} </div>
                    <div style={subDiv}> {props.firstName} </div>
                    <div style={subDiv}> {props.lastname} </div>
                    
                </div>
               
            
        </>
    )
}

export default Table

