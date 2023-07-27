import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex p-1.5 bg-blue-950 justify-between '>
      <Link to={'/'}>
        <img src='../logo.png' className=' w-8 h-8 rounded-full' />
      </Link>
      <section
        id='redes'
        className='flex w-1/12 max-sm:w-3/12 justify-around items-center '
      >
        <a href='https://github.com/perryex64'>
          <img src='../github.png' className='imgRedes' alt='Perfil Github' />
        </a>

        <a href='https://linkedin.com/in/brian-garcia-aguilar-90a576268'>
          <img
            src='../linkedin.png'
            className='imgRedes'
            alt='Perfil Linkedin'
          />
        </a>
      </section>
    </nav>
  );
};

export default Header;
