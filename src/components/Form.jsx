import React, { useState } from 'react'
import './form.css'
function Form() {
    const [state, setState] = useState(false)
    return (<div>
            <button id='btn3' onClick={()=>setState(true)}>Agregar</button>

        <div className={state?"modal":"noMOdal"}>
            <div className='container-form'>
                <div className='container-form_input'>
                    <div className='form'>
                        <label htmlFor="">Titulo</label>
                        <input type="text" />
                        <label htmlFor="">description</label>
                        <input type="text" />
                        <label htmlFor="">Url</label>
                        <input type="text" />
                        <label htmlFor="">categoria</label>
                        <select name="" id="">
                            <option value="">Framework</option>
                            <option value="">Componentes</option>
                            <option value="">Diseños web</option>
                            <option value="">Porfolios</option>
                            <option value="">Fuentes</option>
                            <option value="">Iconos</option>
                            <option value="">Patrones de diseño</option>
                            <option value="">Hosting</option>
                        </select>
                        <div style={{display:"flex"}}>
                            <button id='btn'>Guardar</button>
                            <button id='btn2' onClick={()=>setState(false)}>Cancelar</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </div>
    )
}

export default Form