import React from "react"
import Heading from "../components/Heading"
import { Head,Paragraph } from "./data"
import img from "../assert/imges/img07.jpg"
import Para from "../components/Para"
import Navbar from "../components/Navbar"
import { NavItems } from "./data"

export default class Mixes extends React.Component{
    render(){
        return(
            <>
          <Navbar data={{class:"heroSection hSm",ListData:NavItems.Navli}}/>
            <div className="mixes">
                <Heading data={{heading1:Head.h3}}/>
                <img src={img}></img>
                <Para data={{para:Paragraph.p6}}/>    
            </div>
            <div className="creator">
            <div className="creator-para">
            <Para data={{para:Paragraph.p7}}/>
            <Para data={{para:Paragraph.p8}}/>
            <Para data={{para:Paragraph.p9}}/>
          </div>
            </div>
            </>
       
        )
    }
}