import React from "react";
import Heading from "../components/Heading";
import { Head } from "./data";
import Img from "../components/Img";
import { PhotoImg,Paragraph } from "./data";
import Para from "../components/Para";
import Navbar from "../components/Navbar";
import { NavItems } from "./data";

export default class Photos extends React.Component{
    render(){
        return(
          <>
          <Navbar data={{class:"heroSection hS",ListData:NavItems.Navli}}/>
          <div className="photos">
            <Heading data={{heading1:Head.h10}}/>
            <div className="img-photos">
            <Img data={{CardsData:PhotoImg}}/>
            </div>
            <Para data={{para:Paragraph.p17}}/>
          </div>
          </> 
        )
    }
}