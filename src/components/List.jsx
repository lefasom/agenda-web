import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './list.css'
import { currentCategory } from '../../redux/categorySlice';
function List() {
    const dispatch = useDispatch()
    const array = [
        {
            id: 1,
            title: "Vue.js",
            src: "https://vuejs.org/",
            description: "Framework JavaScript progresivo para construir interfaces de usuario. Ofrece una estructura sencilla para la creación de aplicaciones web interactivas.",
            category: "Framework"
        }
    ];

    const [elements, setElements] = useState([])
    let category = useSelector((state) => state.category)

    useEffect(() => {

        setElements(array.map(item => ({
            ...item,
            description: item.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))
        })))
        
    }, [])
    const Persiana = ({ elements }) => {
        return (
            <div className='hidden'>
                {elements.map((val, index) => {
                    if (category.category == val.category) {
                        return (<div className='container' key={index}>
                            <section className='container-persiana'>
                                <div name="id" id='p'>
                                    <div style={{ display: "flex" }}>
                                        <a href={val.src}>{val.title}</a>
                                        <h6 style={{ margin: "auto 0", color: "#777", width: "100%", textAlign: "end", padding: "0 6px" }}>{val.category}</h6>
                                    </div>
                                    <p> {val.description}</p>
                                </div>

                            </section>
                            <aside>
                                <button id='action'>
                                    <span className="material-symbols-outlined">
                                        edit
                                    </span>
                                </button>
                                <button id='action'>
                                    <span className="material-symbols-outlined">
                                        delete_forever
                                    </span>
                                </button>
                            </aside>
                        </div>
                        )
                    } else if (category.category == "Todo") {
                        return (<div className='container' key={index}>
                            <section className='container-persiana'>
                                <div name="id" id='p'>
                                    <div style={{ display: "flex" }}>
                                        <a href={val.src}>{val.title}</a>
                                        <h6 style={{ margin: "auto 0", color: "#777", width: "100%", textAlign: "end", padding: "0 6px" }}>{val.category}</h6>
                                    </div>
                                    <p> {val.description}</p>
                                </div>

                            </section>
                            <aside>
                                <button id='action'>
                                    <span className="material-symbols-outlined">
                                        edit
                                    </span>
                                </button>
                                <button id='action'>
                                    <span className="material-symbols-outlined">
                                        delete_forever
                                    </span>
                                </button>
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