import React from 'react';
const Formulario = () => {
    return (  
        <form>
            <h2>Agrega tus Gastos aqui:</h2>
            <label>Nombre de Gasto</label>
            <div className="campo">
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej Transporte" 
                />
            </div>
            <div className="campo">
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej 300" 
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}
 
export default Formulario;