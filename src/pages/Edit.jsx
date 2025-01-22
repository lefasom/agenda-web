import React, { useEffect, useState } from 'react'
import './edit.css'
// import { updateDato } from '../../redux/datoAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams(); // Obtener el id del dato a editar desde la URL
  const dispatch = useDispatch();

  // Obtener el dato a editar desde el store de Redux
  const datos = useSelector(state => state.dato.datos); // Obtener los datos del store de Redux
console.log(datos)
  // Verificar si 'datos' está definido y tiene elementos
  if (!datos || datos.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  // Buscar el dato con el id correspondiente
  const dato = datos.find(item => item.id === id);

  if (!dato) {
    return <p>Dato no encontrado</p>;
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("Framework");

  useEffect(() => {
    console.log(dato)
    if (dato) {
      setTitle(dato.title);
      setDescription(dato.description);
      setUrl(dato.url);
      setCategory(dato.category);
    }
  }, [dato]);

  const saltoDeLinea = () => {
    setDescription(description + " \n");
  };

  const handleSubmit = () => {
    // dispatch(updateDato({ id, title, description, url, category }));
    setDescription('');
    setCategory('Framework');
    setUrl('');
    setTitle('');
  };

  return (
    <div>
      <Link id="Link" to="/">
        <span id="add" style={{ fontWeight: "200" }} className="material-symbols-outlined">
          home
        </span>
      </Link>

      <div className={"modal"}>
        <div className='container-form'>
          <div className='container-form_input'>
            <div className='form'>
              <label htmlFor="">Titulo</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
              <label htmlFor="">Descripción</label>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="text"
                  style={{ width: "70%", height: "200px", border: "1px solid #aaaa", borderRadius: "10px", resize: "none" }}
                />
                <button
                  onClick={saltoDeLinea}
                  style={{ margin: "0 4px", padding: "0", border: "1px solid #aaaa", borderRadius: "10px", backgroundColor: "transparent", color: "#777", height: "200px" }}
                >
                  <span className="material-symbols-outlined">
                    subdirectory_arrow_right
                  </span>
                </button>
              </div>
              <label htmlFor="">Url</label>
              <input value={url} placeholder="https://elsitioweb.com/" onChange={(e) => setUrl(e.target.value)} type="text" />
              <label htmlFor="">Categoría</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
                <button onClick={() => handleSubmit()} id='btn'>Actualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit