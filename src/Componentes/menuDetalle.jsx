import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MenuDetalle(){
    const {rec} = useParams();
    const id = rec - 1;
    const [recetas, setRecetas] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);
    const [pasos, setPasos] = useState([]);

    //Listar Recetas
    const getRecetas = useCallback(async() => {
        const results = await axios.get ('http://localhost:8080/api/receta');
        setRecetas(results.data);
    }, []);



    //Listar Ingredientes
    const getIngredientes = useCallback(async() => {
        const resulting = await axios.get(`http://localhost:8080/api/ingredientes/ing/${rec}`);
        setIngredientes(resulting.data);
    }, [rec]);

    const getPasos = useCallback(async() => {
        const resultpas = await axios.get(`http://localhost:8080/api/pasos/pas/${rec}`);
        setPasos(resultpas.data);
    }, [rec])

    useEffect(()=>{
        getRecetas();
        getIngredientes();
        getPasos();
    },[getRecetas, getIngredientes,getPasos, id]);

    return recetas.length ?(
        <div className='menu-detalle'>
            <h1>{recetas[id].nom_rec}</h1>
            <h3>Descripcion</h3>

            <h5>Ingredientes: </h5>
            {ingredientes.map((ingrediente) => (
                <div key={ingrediente.id_ing}>
                    <p>* {ingrediente.nom_ing} {ingrediente.cantidad} {ingrediente.unidad_medida}</p>
                </div>   
            ))}

            <h5>Pasos</h5>
            {pasos.map((paso) => (
                <div key={paso.id_pasos}>
                    <p>{paso.orden} {paso.d_paso}</p>    
                </div>
            ))}
        </div>
    ) : (
        <div>Cargando...</div>
    )
}