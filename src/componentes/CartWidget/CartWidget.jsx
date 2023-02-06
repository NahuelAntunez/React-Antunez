import React from 'react';

const CartWidget = ({cantCarrito}) => {
    return (
        <div>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Carrito</button>
            <p>{cantCarrito}</p>
        </div>
    );
}

export default CartWidget;
