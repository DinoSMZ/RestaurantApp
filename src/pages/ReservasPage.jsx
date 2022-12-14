import React, {useState} from 'react';
import {db} from "../firebase/firebase"
import { collection, getDocs, addDoc,} from "firebase/firestore"

let date = new Date();
let Hoy = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0')  + '-' + String(date.getDate()).padStart(2, '0') ;
console.log(Hoy);

const formularioInicial = { 
  Nombre: "",
Hora: "",
Fecha:"",
Personas:"",}

const ReservasPage = () => {

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
  <div className="col-md-3">
    <label htmlFor="NombreUser" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="Nombre reserva" value = {form.Nombre} onChange={(e) => setForm({...form, Nombre:e.target.value})}/>
    <div id="Nombre de reserva" className="form-text"></div>
  </div>
  <div className="col-md-3">
    <label htmlFor="Hora" className="form-label">Hora</label>
    <input type="time" className="form-control" id="Hora de reserva" value = {form.Hora} onChange={(e) => setForm({...form, Hora:e.target.value})} />
  </div>
  <div className="col-md-3">
    <label htmlFor="Fecha" className="form-label">Fecha</label>
    <input type="date" min={Hoy} className="form-control" id="Start" value = {form.Fecha} onChange={(e) => setForm({...form, Fecha:e.target.value})} />
  </div>
  <div className="col-md-3">
    <label htmlFor="Personas" className="form-label">No. de personas </label>
    <input type="number" className="form-control" id="cantidad de personas" value = {form.Personas} onChange={(e) => setForm({...form, Personas:e.target.value})} />
  </div>
</div>
</form> 
        </article>
    </main>
    <section>
<article>
<div className="container">
  <button type="button" className="btn btn-light" onClick={obtenerReservas}>Mostrar Reservaciones</button>
  <button type="button" className="btn btn-dark" onClick={crearReserva}>Crear Reservacion</button>
</div>
</article>
    </section>
<section>
    <article>

    <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Hora</th>
      <th scope="col">Fecha</th>
      <th scope="col">Personas</th>
    </tr>
  </thead>
  <tbody>
    {
          Reservaciones.map((reserv) =>(

        <tr key={reserv.id}>
        <td>{reserv.Nombre}</td>
        <td>{reserv.Hora}</td>
        <td>{reserv.Fecha}</td>
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

export default ReservasPage