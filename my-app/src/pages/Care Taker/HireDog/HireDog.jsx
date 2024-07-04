// import React from 'react'
import "./HireDog.css";
import dogImg from "../../../assets/doghelp.jpg"
import HeroImg from "../../Shop/Section1/HeroImg";
import HireDog1 from "./HireDog1/HireDog1";
import HireDog2 from "./HireDog2/HireDog2";

// MultiCarousel

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HireDog() {
  return (
    <div className="hiredog">
        <HeroImg image ={dogImg} title="Hire or Buy A Service Dog" data="para" paragraph="A caretaker for physically disabled individuals is akin to having a skilled and attentive service dog. They are trained to assist with daily needs, offer companionship, and ensure the well-being and comfort of their client." />
        <HireDog1/>
        <HireDog2/>

    
    </div>
  )
}
