import React, { useState } from 'react'
import './form.css'
import { addDato } from '../../redux/datoAction'
import { useDispatch } from 'react-redux'
function Form() {
    const dispatch = useDispatch()
    const [state, setState] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")
    const [category, setCategory] = useState("Framework")

    const saltoDeLinea = () =>{
            setDescription(description+" \n")
    }

    
  const handleSubmit = () => {
    dispatch(addDato({ title, description, url, category }))
    setDescription('')
    setCategory('Framework')
    setUrl('')
    setTitle('')

  }

    return (<div>
        <div>
        <button id='btn3' onClick={() => setState(true)}>Agregar</button>
        </div>

        <div className={state ? "modal" : "noMOdal"}>
            <div className='container-form'>
                <div className='container-form_input'>
                    <div className='form'>
                        <label htmlFor="">Titulo</label>
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
                        <label htmlFor="">descripción</label>
                        <div style={{ display: "flex",justifyContent:"center" }}>
                            <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" style={{ width: "70%",height:"200px",border: "1px solid #aaaa", borderRadius: "10px", resize:"none" }} />
                            <button onClick={saltoDeLinea} style={{ margin: "0 4px", padding: "0", border: "1px solid #aaaa", borderRadius: "10px", backgroundColor: "transparent", color: "#777", height:"200px" }} >
                                <span className="material-symbols-outlined">
                                    subdirectory_arrow_right
                                </span>
                            </button>
                        </div>
                        <label htmlFor="">Url</label>
                        <input value={url} placeholder="https://elsitioweb.com/" onChange={(e)=>setUrl(e.target.value)}  type="text" />
                        <label htmlFor="">Categoria</label>
                        <select onChange={(e)=>setCategory(e.target.value)} name="" id="">
                            <option value="Framework">Framework</option>
                            <option value="Componentes">Componentes</option>
                            <option value="Porfolios">Porfolios</option>
                            <option value="Fuentes">Fuentes</option>
                            <option value="Iconos">Iconos</option>
                            <option value="Diseño">Diseño</option>
                            <option value="Hosting">Hosting</option>
                            <option value="Recursos">Recursos</option>
                            <option value="Backend">Backend</option>


                        </select>
                        <div style={{ display: "flex" }}>
                            <button onClick={()=>handleSubmit()} id='btn'>Guardar</button>
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