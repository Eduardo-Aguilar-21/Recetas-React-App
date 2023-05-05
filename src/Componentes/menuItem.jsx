import React from "react";
import '../Estilos/recetas.css';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function MenuItem({rec}){
    return(
        <div key={rec.id_rec} className='menu-item'>
            <h1>{rec.nom_rec}</h1>
            <h2>Descripcion</h2>
            <h2>Tiempo de preparacion</h2>
            <Button><Link to={`/detalle/${rec.id_rec}`}>Ir </Link></Button>
        </div>
    );
}