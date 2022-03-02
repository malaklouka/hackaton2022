import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { MdWorkOutline} from "react-icons/md";
import {BsVectorPen} from "react-icons/bs"
import './equipe.css'

const CardEq = ({ equipe }) => {
  return (
    <div className="equipe">
      <Flippy
        flipOnClick={true}
        flipOnHover={true}
        flipDirection="horizontal"   style={{ width: '180px', height: '270px' }}
        className="username" >
        <FrontSide>
          <div className="equip">
            <div className="profil" style={{margin: ""}}>

            <img src={equipe.image} style={{ 
             width: 130,
             height: 130,
             borderRadius: 80,
            
            }}  alt="mon avatar" />
              
            </div>
            <h4 style={{fontSize:15, marginTop:'5px', marginLeft:'12px'}}>  {equipe.name}</h4>

            <h3 style={{fontSize:15,color:"#00008B"}}> {equipe.role}</h3>

          </div>
        </FrontSide>
        <BackSide>
          <div className="equip">
            <h5 style={{fontSize:12, color:"black"}}> <BsVectorPen/> {equipe.describtion}</h5>
          </div>
        </BackSide>
      </Flippy>
    </div>
  );
};

export default CardEq;
