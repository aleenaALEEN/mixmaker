import React from "react";


export default class Heading extends React.Component{
    render(){
        return(
          <h1>{this.props.data.heading1}</h1> 
        )
    }
}