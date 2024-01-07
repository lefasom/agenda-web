import React, { useEffect, useState } from 'react'
import './list.css'
function List() {
    const array = [
        {
            id: 1,
            title: "Vue.js",
            src: "https://vuejs.org/",
            description: "Framework JavaScript progresivo para construir interfaces de usuario. Ofrece una estructura sencilla para la creación de aplicaciones web interactivas.",
            category: "Framework"
        },
        {
            id: 2,
            title: "React",
            src: "https://reactjs.org/",
            description: "Librería JavaScript para construir interfaces de usuario. Utilizado para la creación de componentes reutilizables.",
            category: "Framework"
        },
        {
            id: 3,
            title: "Angular",
            src: "https://angular.io/",
            description: "Framework TypeScript para construir aplicaciones web de una sola página. Proporciona una estructura robusta para el desarrollo.",
            category: "Framework"
        },
        {
            id: 4,
            title: "Svelte",
            src: "https://svelte.dev/",
            description: "Framework para construir aplicaciones web con un enfoque en la eficiencia. Convierte el código en tiempo de compilación a código optimizado.",
            category: "Framework"
        },
        {
            id: 5,
            title: "Ember.js",
            src: "https://emberjs.com/",
            description: "Framework JavaScript para crear aplicaciones web escalables. Proporciona herramientas para el desarrollo rápido.",
            category: "Framework"
        },
        {
            id: 6,
            title: "Material-UI",
            src: "https://material-ui.com/",
            description: "Biblioteca de componentes React basada en Material Design. Ofrece una gama de componentes personalizables para el desarrollo web.",
            category: "Componentes"
        },
        {
            id: 7,
            title: "Bootstrap",
            src: "https://getbootstrap.com/",
            description: "Framework front-end para diseño web. Contiene plantillas y componentes CSS y JavaScript para el desarrollo ágil.",
            category: "Framework"
        },
        {
            id: 8,
            title: "Tailwind CSS",
            src: "https://tailwindcss.com/",
            description: "Framework CSS utility-first para diseño web. Permite construir interfaces personalizadas de manera rápida y eficiente.",
            category: "Framework"
        },
        {
            id: 9,
            title: "Chakra UI",
            src: "https://chakra-ui.com/",
            description: "Conjunto de componentes React accesibles y personalizables. Facilita la construcción de interfaces web.",
            category: "Componentes"
        },
        {
            id: 10,
            title: "Ant Design",
            src: "https://ant.design/",
            description: "Biblioteca de diseño y componentes React. Proporciona una amplia gama de componentes listos para usar.",
            category: "Componentes"
        },
        {
            id: 11,
            title: "Font Awesome",
            src: "https://fontawesome.com/",
            description: "Biblioteca de iconos y fuentes. Proporciona una amplia selección de iconos personalizables para proyectos web.",
            category: "Fuentes"
        },
        {
            id: 12,
            title: "Google Fonts",
            src: "https://fonts.google.com/",
            description: "Biblioteca de fuentes gratuitas de Google. Ofrece una variedad de fuentes para su uso en proyectos web.",
            category: "Fuentes"
        },
        {
            id: 13,
            title: "Adobe Fonts",
            src: "https://fonts.adobe.com/",
            description: "Colección de fuentes de Adobe. Proporciona fuentes premium para diseñadores y desarrolladores.",
            category: "Fuentes"
        },
        {
            id: 14,
            title: "Dribbble",
            src: "https://dribbble.com/",
            description: "Plataforma para diseñadores para mostrar, compartir y descubrir trabajos de diseño. Ofrece inspiración y recursos para diseño.",
            category: "Diseño"
        },
        {
            id: 15,
            title: "Behance",
            src: "https://www.behance.net/",
            description: "Plataforma de Adobe para mostrar trabajos creativos. Es una red social para artistas y diseñadores.",
            category: "Diseño"
        },
        {
            id: 16,
            title: "Awwwards",
            src: "https://www.awwwards.com/",
            description: "Reconoce y promueve el talento y la innovación en el diseño web. Muestra ejemplos de sitios web creativos.",
            category: "Sitios de Diseño"
        },
        {
            id: 17,
            title: "CodePen",
            src: "https://codepen.io/",
            description: "Plataforma para escribir y compartir código front-end. Permite experimentar con HTML, CSS y JavaScript.",
            category: "Diseño"
        },
        {
            id: 18,
            title: "Figma",
            src: "https://www.figma.com/",
            description: "Herramienta de diseño de interfaces de usuario. Permite colaboración en tiempo real y prototipado.",
            category: "Diseño"
        },
        {
            id: 19,
            title: "Sketch",
            src: "https://www.sketch.com/",
            description: "Software de diseño vectorial. Ampliamente utilizado por diseñadores para crear interfaces de usuario.",
            category: "Diseño"
        },
        {
            id: 20,
            title: "Canva",
            src: "https://www.canva.com/",
            description: "Herramienta en línea para diseño gráfico. Proporciona plantillas y herramientas para crear diseños rápidamente.",
            category: "Sitios de Diseño"
        },
        {
            id: 21,
            title: "Gatsby",
            src: "https://www.gatsbyjs.com/",
            description: "Framework basado en React para crear sitios web rápidos y optimizados. Utiliza GraphQL para manejar datos.",
            category: "Framework"
        },
        {
            id: 22,
            title: "Next.js",
            src: "https://nextjs.org/",
            description: "Framework de React para construir aplicaciones web escalables. Ofrece renderizado del lado del servidor.",
            category: "Framework"
        },
        {
            id: 23,
            title: "Nuxt.js",
            src: "https://nuxtjs.org/",
            description: "Framework Vue.js para construir aplicaciones web con renderizado del lado del servidor. Facilita el desarrollo con Vue.",
            category: "Framework"
        },
        {
            id: 24,
            titulo: "Redux",
            src: "https://redux.js.org/",
            description: "Librería de gestión de estado para aplicaciones JavaScript. Utilizado con React, Vue y otros frameworks.",
            category: "Librería"
        },
        {
            id: 25,
            title: "RxJS",
            src: "https://rxjs.dev/",
            description: "Librería reactiva para JavaScript. Permite el manejo de flujos de datos asincrónicos.",
            category: "Librería"
        },
        {
            id: 26,
            title: "Three.js",
            src: "https://threejs.org/",
            description: "Biblioteca JavaScript para crear gráficos 3D en navegadores web. Utilizada para juegos y visualizaciones.",
            category: "Librería"
        },
        {
            id: 27,
            title: "Styled Components",
            src: "https://styled-components.com/",
            description: "Librería para escribir estilos CSS en JavaScript. Facilita la creación de componentes estilizados.",
            category: "Librería"
        },
        {
            id: 28,
            title: "Quasar",
            src: "https://quasar.dev/",
            description: "Framework Vue.js para construir aplicaciones web y móviles. Proporciona componentes y herramientas.",
            category: "Framework"
        },
        {
            id: 29,
            title: "Bulma",
            src: "https://bulma.io/",
            description: "Framework CSS moderno basado en flexbox. Proporciona componentes y utilidades para diseño web.",
            category: "Framework"
        },
        {
            id: 30,
            title: "InVision",
            src: "https://www.invisionapp.com/",
            description: "Herramienta para prototipado y colaboración de diseño. Permite crear prototipos interactivos para pruebas.",
            category: "Diseño"
        }
    ];

    const [elements, setElements] = useState([])

    useEffect(() => {
        setElements(array.map(item => ({
            ...item,
            description: item.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))
        })));
    }, [])
    const Persiana = ({ elements }) => {
        return (<div className='hidden'>

            {elements.map((val, index) => {
                return (<div className='container'>
                    <section className='container-persiana'>
                        <div name="id" id='p'>
                            <div style={{display:"flex"}}>
                                <a href={val.src}>{val.title}</a>
                                <h6 style={{margin:"auto 0",color:"#777",width:"100%",textAlign:"end",padding:"0 6px"}}>{val.category}</h6>
                            </div>
                            <p> {val.description}</p>
                        </div>

                    </section>
                    <aside>
                        <button id='action'>
                            <span class="material-symbols-outlined">
                                edit
                            </span>
                        </button>
                        <button id='action'>
                            <span class="material-symbols-outlined">
                                delete_forever
                            </span>
                        </button>
                    </aside>
                </div>)
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