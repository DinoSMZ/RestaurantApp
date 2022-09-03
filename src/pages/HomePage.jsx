import logo2 from '../assets/Mati2.png'

const Homepage = () => {
return (
    <>
    <body>
      <header>
             <h1 className="d-flex justify-content-center" >
             <img src={logo2} className="logo" alt="/" />
            </h1>
         </header>
      <main >
         <article className="Art1">
             <div className="HP1">
             <div className="px-4 py-5 my-5 text-center">
  <img className="d-block mx-auto mb-4 Nav" src="https://d320djwtwnl5uo.cloudfront.net/article/jag5vx1ft9_comidaitaliana.jpg" alt width="65%" height="40%"/>
  <h1 className="display-5 fw-bold">Ven y disfruta de nuestra cocina italiana!</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">Somos uno de los restaurantes de cocina italiana y fusión de Bilbao con mejor reputación, por el gran sabor y cariño que le ponemos en cada uno de nuestros platos.

Una mezcla de nuestra cocina tradicional con la cocina típica italiana.</p>
    
  </div>
</div>


             </div>
          </article>

          <article className="Art2">
            <div className="row">
               <div className="col-ml-6">

               </div>

               <div className="col-ml-6">
                  
                  </div> 

            </div>
          </article>

       </main>  
       </body>
    </>
) 

}

export default Homepage;
 