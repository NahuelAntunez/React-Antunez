import React from 'react';

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Mujer</a>
                <a className="dropdown-item" href="#">Hombre</a>
                <a className="dropdown-item" href="#">Niñes</a>
            </div>
    </li>
    );
}

export default Categorias;
