import React,{Fragment, useState} from 'react';  
const Pregunta = () => {
    const [cantidad ,guardarCantidad] = useState(0);
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value));
    }
    return (  
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            <fom>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </fom>
        </Fragment>
    );
}
 
export default Pregunta;