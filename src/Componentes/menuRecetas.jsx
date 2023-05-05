import React, { useCallback, useEffect, useState } from 'react';
import '../Estilos/recetas.css';
import { MenuItem } from './menuItem';
import axios from 'axios';

export function MenuRecetas({lik}){
    const [Recetas, setRecetas] = useState([]);


    const getRecetas = useCallback(async() => {
        const result = axios.get (lik)
        setRecetas((await result).data);
    },[lik]); 

    useEffect(()=>{
        getRecetas();
    },[getRecetas]);

    return(
        <div>
            <h1>Comida</h1>
            <div className='contenedor-recetas'>
                {Recetas.map((receta) =>(
                        <MenuItem key={receta.id_rec} rec={receta} />
                ))}
            </div>
        </div>

    );
}