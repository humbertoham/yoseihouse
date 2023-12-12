

export default function Banner() {

  return (
    <div className="banner">
     

      <div className="relative isolate px-6 pt-14 lg:px-8">
       
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            ¡La mejor casa creativa en Reynosa!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Creemos que cada proyecto es una oportunidad para crear algo extraordinario.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contacto"
                className="rounded-md butt px-3.5 py-2.5 text-sm font-semibold  ">
                Contáctanos
              </a>
             
            </div>
          </div>
        </div>
       <img src="./images/logo.png" className="banL"/>
      </div>
    </div>
  )
}
