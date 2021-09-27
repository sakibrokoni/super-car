import React from 'react';
import './DisplayCharacter.css'

// Import FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserInjured} from '@fortawesome/free-solid-svg-icons'


const DisplayCharacter =(props) => {

    const { name,Title,occupation,gender,affiliation,price,img}=props.character;
    const Casting = <FontAwesomeIcon icon={faUserInjured} />

    return(
        <div className="display">
            <div><img src={img} alt="" /></div>
            <div>
            <h4 className="display-name">{name}</h4>
            <h4>Title: {Title}</h4>
            <h4>Occupation: {occupation}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Affiliation: {affiliation}</h4>
            <h4>Price: ${price}</h4>
            <button onClick={()=>props.handleAddToCart(props.character)} className="btn">{Casting} Select Character</button>
            </div>

        </div>
    );

};
export default DisplayCharacter;