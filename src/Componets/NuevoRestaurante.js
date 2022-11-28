import React, { useState } from 'react'
import { listaProductos } from '../data-producto'
import swal from 'sweetalert';



export const NuevoRestaurante = () => {

  const [formulario, setValoresFormulario] = useState({});
  let { id = '', nombre = '', descripcion = '', direccion = '', url = '' } = formulario;
  id++;
  // permite asignar los valores del formulario a la variable de estado  formValues
  const handleOnChange = (e) => {
    setValoresFormulario({ ...formulario, [e.target.name]: e.target.value });

  }

  // pinta los valores del formulario cuando presionan el boton
  const handleOnSubmit = (e) => {
    e.preventDefault(); // evita que se recargue el formulario
    listaProductos.push(formulario);
    console.log(formulario);
    setValoresFormulario(nombre = "",descripcion = "",direccion = "",url = "");
  }

  const mensaje = () => {
    swal("Datos guardados correctamente","","success");
  }
  return (

    <div className="container-fluid mt-3 ancho">

    

      <form  onSubmit={(e) => handleOnSubmit(e)} autoComplete="off">
        <input required type="hidden" name="id" value={id} />
        <div className="mb-3">
          <label className="form-label">Nombre Restaurante</label>
          <input required type="text" name="nombre" value={nombre}
            className="form-control" onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input required type="text" name="descripcion" value={descripcion}
            className="form-control" onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input required type="text" className="form-control" name='direccion'
            value={direccion} onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Url image</label>
          <input required type="Url" className="form-control" name='url'
            value={url} onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <button type="submit" onClick={() => mensaje()} className="btn btn-primary form-control">Guardar</button>
        </div>
      </form>
    </div>

  )
}
