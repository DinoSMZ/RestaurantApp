import React from 'react';
import {db} from "../firebase/firebase"
import { collection, getDocs} from "firebase/firestore"

const PlatillosPage = () => {

const obtenerReservas = async () => {

    const resp = await getDocs(collection (db, "Reservas")); 
    const data = resp.docs.map((reserva) => ({
        id: reserva.id,
        ...reserva.data(),
    }))


   console.log(data)

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
  <div>
  <div className="mb-3">
    <label htmlFor="NombreUser" className="form-label">Nombre</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="Hora" className="form-label">Hora</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
        
        </article>
    
    </main>


    <section>

<article>
<div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={obtenerReservas}>Obtener reservas </button>
  <button type="button" className="btn btn-primary">Crear reservas</button>
</div>




</article>

    </section>
 
    </>
  )
}

export default PlatillosPage