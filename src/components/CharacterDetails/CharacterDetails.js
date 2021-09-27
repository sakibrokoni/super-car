
import React,{useEffect} from 'react';
import { useState } from 'react';
import './CharacterDetails.css'
import Cart from '../Cart/Cart';
import DisplayCharacter from '../DisplayCharacter/DisplayCharacter';

const CharacterDetails = () => {
    // Declare useState
    const [characters,setCharacters]=useState([])
    const[cart,setCart]=useState([])
    // loading Data
    useEffect(()=>{
        fetch('./characters.JSON')
        .then(res=>res.json())
        .then(data=>setCharacters(data));
    },[])
       // make Handler to the parent then send it to the child 
    const handleAddToCart=(character)=>{
        // You can only add one charecter to your casting 
        if(cart.indexOf(character)===-1)
        {
            const newCart=[...cart,character]
            setCart(newCart);
        }
        
    }
    return (
        <div className="display-container">
                <div className="character-container">
                {/* Display Section */}
                    {
                        characters.map(character=><DisplayCharacter
                        key={character.key}
                        character={character}
                        handleAddToCart={handleAddToCart}
                        ></DisplayCharacter>)
                    }
                   
                </div>
                {/* Cart Section */}
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            

        </div> 
    );
};

export default CharacterDetails;