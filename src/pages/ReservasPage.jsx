import React, {useState} from 'react';
import {db} from "../firebase/firebase"
import { collection, getDocs, addDoc} from "firebase/firestore"
import { async } from '@firebase/util';

const formularioInicial = { 
  Nombre: "",
Hora: "",
Personas:"",}

const PlatillosPage = () => {

  const [Reservaciones, setReservas] = useState([]);

  const [form, setForm] = useState(formularioInicial);

const obtenerReservas = async () => {

    const resp = await getDocs(collection (db, "Reservas")); 
    const data = resp.docs.map((reserva) => ({
        id: reserva.id,
        ...reserva.data(),
    }))


   console.log(data);
   setReservas(data)
}

const crearReserva = async () => {
  const coleccionReservas = collection(db, "Reservas")
  await addDoc(coleccionReservas, form)
  await obtenerReservas()
}


  return (
  <>

  <header>
    <h1>
        Reservaciones
    </h1>
  </header>

    <main>
        <article>
        <form>
  <div className="row container">
  <div className="col-md-4">
    <label htmlFor="NombreUser" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="Nombre reserva" value = {form.Nombre} onChange={(e) => setForm({...form, Nombre:e.target.value})}/>
    <div id="Nombre de reserva" className="form-text"></div>
  </div>
  <div className="col-md-4">
    <label htmlFor="Hora" className="form-label">Hora</label>
    <input type="time" className="form-control" id="Hora de reserva" value = {form.Hora} onChange={(e) => setForm({...form, Hora:e.target.value})} />
  </div>
  <div className="col-md-4">
    <label htmlFor="Personas" className="form-label">Cantidad de personas </label>
    <input type="text" className="form-control" id="cantidad de personas" value = {form.Personas} onChange={(e) => setForm({...form, Personas:e.target.value})} />
  </div>
</div>
</form> 
        </article>
    </main>
    <section>
<article>
<div className="container-fluid">
  <button type="button" className="btn btn-secondary btn-lg" onClick={obtenerReservas}>Obtener reservas </button>
  <button type="button" className="btn btn-lg btn-primary" onClick={crearReserva}>Crear reservas</button>
</div>




</article>

    </section>
<section>
    <article>

    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Hora</th>
      <th scope="col">Cant de Personas</th>
    </tr>
  </thead>
  <tbody>
    {
      Reservaciones.map((reserv) =>(

        <tr key={reserv.id}>
        <th scope="row">{reserv.id}</th>
        <td>{reserv.Nombre}</td>
        <td>{reserv.Hora}</td>
        <td>{reserv.Personas}</td>
      </tr>
      ))




    }
   
  </tbody>
</table>



    </article>
 
    </section>

    </>
  )
}

export default PlatillosPage