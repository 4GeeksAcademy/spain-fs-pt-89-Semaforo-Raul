import React from "react";
import {useState} from "react";

const TrafficLight = () => {
    const [selectedColor, setselectedColor] = useState ("");

    return (
    <div className="traffic-ligth">
        <div
        onClick={() => setselectedColor("red")}
        className ={"light red" + (selectedColor ==="red" ? " glow" : "")}></div>
    
    <div
        onClick={() => setselectedColor("yellow")}
        className ={"light yellow" + (selectedColor ==="yellow" ? " glow" : "")}></div>
    
    <div
        onClick={() => setselectedColor("green")}
        className ={"light green" + (selectedColor ==="green" ? " glow" : "")
    }></div>
    </div>
    );
    }
    
 export default TrafficLight;
 
