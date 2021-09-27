import './Cart.css'

const Cart = (props) => {
    const{cart}=props;
    // Calculating Total Cost
    let total=0;
    for(const characters of cart)
    {
        total=total+characters.price;
    }
    
    return (
        <div className="cartDetails">
            <h3>Character Details</h3>
            {/* Total booked */}
            <h4>Character Booked : {props.cart.length} </h4>
            <div>
                {
                    // Show Name
                    props.cart.map(characters=><h5 key={characters.key}>
                         <small>{characters.name}</small> </h5>)
                }
                
            </div>
            
            <hr/>
            <h5>Total Characters Cost : ${total} </h5>

        </div>
    )
};

export default Cart;