import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './list.css'
import { deletedato, getDatos } from '../../redux/datoAction'


function List() {
    const dispatch = useDispatch()
    let datos = useSelector((state) => state.dato.datos)


    const [elements, setElements] = useState([])
    let category = useSelector((state) => state.category)

    const onDeleteLink = (id) => {
        dispatch(deletedato({ id }))
    }


    useEffect(() => {
        dispatch(getDatos())
    }, [])
    useEffect(() => {

        setElements(datos.map(item => ({
            ...item,
            description: item.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))
        })))

    }, [datos])
    const Persiana = ({ elements }) => {
        return (
            <div className='hidden'>
                {elements.map((val, index) => {
                    if (category.category.toLowerCase() == val.category.toLowerCase()) {
                        return (<div className='container' key={index}>
                            <section className='container-persiana'>
                                <div name="id" id='p'>
                                    <div style={{ display: "flex" }}>
                                        <h2>{val.title}</h2>
                                        <h6 style={{ margin: "auto 0", color: "#777", width: "100%", textAlign: "end", padding: "0 6px" }}>{val.category}</h6>
                                    </div>
                                    <p> {val.description}</p>
                                </div>

                            </section>
                            <aside>
                            <a href={val.url} id='action'>

                                    <span className="material-symbols-outlined">
                                        link
                                    </span>
                                </a>
                                {/* <button onClick={()=>onDeleteLink(val.id)} id='action'>
                                    <span className="material-symbols-outlined">
                                        delete_forever
                                    </span>
                                </button> */}
                            </aside>
                        </div>
                        )
                    } else if (category.category == "Todo") {
                        return (<div className='container' key={index}>
                            <section className='container-persiana'>
                                <div name="id" id='p'>
                                    <div style={{ display: "flex" }}>
                                        <h2>{val.title}</h2>
                                        <h6 style={{ margin: "auto 0", color: "#777", width: "100%", textAlign: "end", padding: "0 6px" }}>{val.category}</h6>
                                    </div>
                                    <p> {val.description}</p>
                                </div>

                            </section>
                            <aside>
                                <a href={val.url} id='action'>
                                    <span className="material-symbols-outlined">
                                        link
                                    </span>
                                </a>
                                {/* <button onClick={()=>onDeleteLink(val.id)} id='action'>

                                    <span className="material-symbols-outlined">
                                        delete_forever
                                    </span>
                                </button> */}
                            </aside>
                        </div>)

                    }


                })}


            </div>)
    }
    return (
        <div className='container-list'>
            <Persiana elements={elements} />
        </div>
    )
}

export default List