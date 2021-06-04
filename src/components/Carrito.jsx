import React from 'react';
import './carrito.css'
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => {


    return(
        <div className="carrito">
        <h2>Tu carrito de compras</h2>
   
        {
            carrito.length === 0
            ? <p>VALAR MORGHULIS</p>
            :
            carrito.map(item =>{
                return(
                    <Producto
                        key={item.id}
                        producto = {item}
                        carrito = {carrito}
                        agregarProducto={agregarProducto}
                    />

                )
            })
        }
   
        
    </div>
    )

}


export default Carrito;