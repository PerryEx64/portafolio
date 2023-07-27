import Experiencias from './components/Experiencias';
import Footer from './components/Footer';
import Header from './components/Header';
import Tecnologies from './components/Tecnologies';
const App = () => {
  return (
    <div>
      <Header />
      <div className='snap-y'>
        <section className=' bg-blue-950 p-5 snap-always'>
          <img
            src='../profile.webp'
            alt='imagen perfil perryex'
            className=' w-36 h-36 rounded-full shadow-lg ml-auto mr-auto'
          />
          <div className='flex justify-center items-center'>
            <h1 className='text-white text-4xl'>Brian Israel</h1>
            <h2 className='text-red-500  ml-2 text-4xl font-semibold'>
              Aguilar
            </h2>
          </div>
          <label className='flex justify-center items-center text-yellow-500 mb-16'>
            Desarrollador front-end y back-end
          </label>
          <article className='flex flex-col items-center'>
            <p className='text-white text-lg text-center max-w-2xl'>
              Soy un apasionado desarrollador móvil y web. Me especializo en entorno movil pero me adapto eficientemente
              al entorno web. Actualmente curso el ultimo semestre de Ingenieria en Sistemas.
            </p>
            <div className='flex justify-around w-full mt-10'>
              <img src='../web.svg' alt='fondo web' className=' w-1/3 h-72' />
              <img
                src='../mobile.svg'
                alt='fondo mobile'
                className=' w-72 h-72'
              />
            </div>
          </article>
        </section>
        <Tecnologies />
        <Experiencias />
        <Footer />
      </div>
    </div>
  );
};

export default App;
