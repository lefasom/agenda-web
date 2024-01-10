import React, { useState } from 'react'
import './form.css'
function Form() {
    const [state, setState] = useState(false)
    return (<div>
        <button id='btn3' onClick={() => setState(true)}>Agregar</button>

        <div className={state ? "modal" : "noMOdal"}>
            <div className='container-form'>
                <div className='container-form_input'>
                    <div className='form'>
                        <label htmlFor="">Titulo</label>
                        <input type="text" />
                        <label htmlFor="">descripción</label>
                        <div style={{ display: "flex",justifyContent:"center" }}>
                            <textarea type="text" style={{ width: "70%",height:"200px",border: "1px solid #aaaa", borderRadius: "10px", resize:"none" }} />
                            <button style={{ margin: "0 4px", padding: "0", border: "1px solid #aaaa", borderRadius: "10px", backgroundColor: "transparent", color: "#777", height:"200px" }} >
                                <span className="material-symbols-outlined">
                                    subdirectory_arrow_right
                                </span>
                            </button>
                        </div>
                        <label htmlFor="">Url</label>
                        <input type="text" />
                        <label htmlFor="">categoria</label>
                        <select name="" id="">
                            <option value="">Framework</option>
                            <option value="">Componentes</option>
                            <option value="">Porfolios</option>
                            <option value="">Fuentes</option>
                            <option value="">Iconos</option>
                            <option value="">Diseño</option>
                            <option value="">Hosting</option>
                            <option value="">Recursos</option>

                        </select>
                        <div style={{ display: "flex" }}>
                            <button id='btn'>Guardar</button>
                            <button id='btn2' onClick={() => setState(false)}>Cancelar</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    )
}

export default Form