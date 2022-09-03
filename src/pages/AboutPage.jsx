import React from 'react'
import logo2 from '../assets/Mati2.png'


const AboutPage = () => {
   return (
      <>

        <header>
        <h1 className="d-flex justify-content-center" >
             <img src={logo2} className="logo" alt="/" />
            </h1>
           </header>
        <main>
           <article>
              <div className="container pb-5">
  <div className="row">
    <div className="col">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <h2 className="d-flex justify-content-around"> NOSOTROS</h2>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.caracteristicas.co/wp-content/uploads/2018/09/italia-venecia-e1579918757767.jpg" className="d-block rounded mx-auto border rounded-5 shadow-lg mb-4" width="80% " height="50% " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-secondary "> <b>Orígenes</b></h1>
              <p className="text-light fs-3"><b>Desde Italia, nuestro <i style={{color: 'black'}}>fundador</i> trajo consigo las mejores recetas tradicionales</b></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2021-09/france_winner_bocuse_d_or_2021_france.jpg?itok=KzcF1GYe" className="d-block rounded mx-auto border rounded-5 shadow-lg mb-4" width="80% " height="50%" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-dark "><b>Premios</b></h1>
              <p className=" text-dark fs-3"><b>Somos acreedoers de  2 <i style={{color: 'yellow'}}>Estrellas michelín</i> </b></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.create.vista.com/api/media/medium/193630250/stock-photo-multiracial-chefs-team-smiling-modern?token=" className="d-block rounded mx-auto border rounded-5 shadow-lg mb-4" width="80% " height="50%" alt="..." />
            <div className="carousel-caption d-none d-md-block ">
              <h1 className="text-primary "><b>Equipo</b></h1>
              <p className=" text-light fs-3"><b>Nos conformamos de gente local, experta en cocina <i style={{color: 'yellow'}}>Italiana</i></b></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  </div>
</div>


            </article>
         </main>  
      </>
  ) 
  
  }
  
  export default AboutPage   