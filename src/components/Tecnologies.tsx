const Tecnologies = () => {
  return (
    <>
      <h3 className='text-xl ml-5 mt-5 font-semibold text-blue-950'>
        Habilidades
      </h3>
      <section
        className='
        md:flex md:justify-around md:items-center
         max-sm:grid max-sm:grid-cols-2 
         [&>article>img]:Imgtecnologies 
         [&>article]:aticleTecnologies
         [&>article>label]:labelTecnologies
         mb-16
         mt-12
         snap-center
         '
      >
        <article>
          <img src='./web.png' alt='tecnologia web' />
          <label>HTML, CSS y JavaScript</label>
        </article>

        <article>
          <img src='./react.png' alt='tecnologia react' />
          <label>React</label>
        </article>

        <article>
          <img src='./react-native.png' alt='tecnologia react-native' />
          <label>React Native</label>
        </article>

        <article>
          <img src='./node.png' alt='tecnologia nodejs' />
          <label>Node JS</label>
        </article>

        <article>
          <img src='./firebase.png' alt='tecnologia firebase' />
          <label>Firebase</label>
        </article>

        <article>
          <img src='./tailwind.png' alt='tecnologia tailwind' />
          <label>TailwindCss</label>
        </article>

        <article>
          <img src='./laravel.png' alt='tecnologia laravel' />
          <label>Laravel</label>
        </article>
      </section>
    </>
  );
};

export default Tecnologies;
