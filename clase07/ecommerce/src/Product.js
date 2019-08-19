import React from 'react';

function Product(props) { 
  return (
    <div>
        <h2>{props.info.name}</h2>
        <p>Stock: {props.info.stock}</p>

        {   
            props.info.stock === 0 ? 'Sin Stock' : <button value={props.info.id} onClick={props.buyAction}>Comprar</button>
        }
        <p>Price: ${props.info.price}</p>
        
    </div>
  );  
}
export default Product;