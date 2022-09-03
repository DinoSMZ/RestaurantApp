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
      <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="false">
        <h2 className="d-flex justify-content-around"> NOSOTROS</h2>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://s03.s3c.es/imag/_v0/770x420/a/8/9/roma-italia-desastre.jpg" className="d-block rounded mx-auto border rounded-5 shadow-lg mb-4" width="80% " height="50% " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-primary"> <b>Orígenes</b></h1>
              <p className="text-light fs-3"><b>Desde Italia, nuestro <i style={{color: 'black'}}>fundador</i> trajo consigo las mejores recetas tradicionales</b></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2021-09/france_winner_bocuse_d_or_2021_france.jpg?itok=KzcF1GYe" className="d-block rounded mx-auto border rounded-5 shadow-lg mb-4" width="80% " height="50%" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-info"><b>Premios</b></h1>
              <p className=" text-dark fs-3"><b>Somos acreedoers de  <i style={{color: 'red'}}>2 </i> <i style={{color: 'yellow'}}>Estrellas michelín</i> </b></p>
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



            <article className="container">
               <h1 className="center">Visítanos</h1>
               <div className="row">


          <iframe title="my frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.2974893401795!2d-89.61861645783306!3d21.00886655239485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5676af6b581365%3A0x4176760d906cef38!2sAv%20Campestre%2017%2C%20Campestre%2C%2097120%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses!2smx!4v1662189822126!5m2!1ses!2smx" width={500} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <div className="center">
            <h3 >Escríbenos</h3>
            <p className="text-align center">Matildes@hotmail.com</p>
            </div>

            </article>
         </main>  
      </>
  ) 
  
  }
  
  export default AboutPage   