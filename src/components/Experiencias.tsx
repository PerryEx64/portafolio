import Modal from './Modal';

const Experiencias = () => {
  return (
    <>
      <h3 className=' text-xl font-semibold text-blue-950'>Experiencias</h3>
      <section className=' flex justify-around m-5 [&>article>div>h4]:expLabel [&>article>div>p]:expP'>
        {/* Card App move */}
        <article className='expArticle'>
          <div className='flex flex-col justify-center items-center'>
            <h4>App viajes</h4>
            <label className='text-sm text-purple-600 '>rutt.io</label>
          </div>
          <div className='p-2'>
            <label className='font-semibold mb-3 text-blue-400'>Cargo:</label>
            <p className=''>
              Encargado de desarrollo de la aplicacion, tanto del lado cliente
              como administrativo.
            </p>
          </div>
          <Modal title='Soy IDEC'>
            <></>
          </Modal>
          <div className='flex justify-around w-full items-center'>
            <img
              src='/firebase.png'
              alt='logo firebase'
              className='w-7 h-7 underline'
            />
            <img
              src='/react-native.png'
              alt='logo react-native'
              className='w-7 h-7'
            />
            <img src='/node.png' alt='logo nodejs' className='w-7 h-7' />
          </div>
        </article>

        {/* Card app soyCarnet */}
        <article className='expArticle'>
          <div className='flex flex-col justify-center items-center'>
            <h4>App manejo de carnets</h4>
            <label className='text-sm text-green-600 '>freelance</label>
          </div>
          <div className='p-2'>
            <label className='font-semibold mb-3 text-blue-400'>Cargo:</label>
            <p className=''>Encargado de desarrollo de toda la aplicacion</p>
          </div>
          <Modal title='Soy Carnet'>
            <div className='grid grid-cols-2 gap-2 '>
              <img
                src='/soycarnet1.png'
                alt='carnet iglesias'
                className='expImg'
              />
              <img
                src='/soycarnet2.png'
                alt='carnet iglesias'
                className='expImg'
              />
              <img
                src='/soycarnet3.png'
                alt='carnets iglesias'
                className='expImg'
              />
            </div>
          </Modal>
          <div className='flex justify-around w-full items-center'>
            <img
              src='/firebase.png'
              alt='logo firebase'
              className='w-7 h-7 underline'
            />
            <img
              src='/react-native.png'
              alt='logo react-native'
              className='w-7 h-7'
            />
            <img src='/node.png' alt='logo nodejs' className='w-7 h-7' />
          </div>
        </article>

        {/* Card App SoyIglesia movile */}
        <article className='expArticle'>
          <div className='flex flex-col justify-center items-center'>
            <h4>App movile para Iglesia</h4>
            <label className='text-sm text-green-600 '>freelance</label>
          </div>
          <div className='p-2'>
            <label className='font-semibold mb-3 text-blue-400'>Cargo:</label>
            <p className=''>
              Encargado de desarrollo de la aplicacion y diseño
            </p>
          </div>
          <Modal title='Soy IDEC'>
            <div className='grid grid-cols-2 gap-3 '>
              <img src='/appIdec.PNG' alt='soy IDEC' className='expImg' />
              <img src='/appIdec2.PNG' alt='soy IDEC' className='expImg' />
              <img src='/appIdec3.PNG' alt='soy IDEC' className='expImg' />
              <img src='/appIdec4.PNG' alt='soy IDEC' className='expImg' />
              <img src='/appIdec5.PNG' alt='soy IDEC' className='expImg' />
              <img src='/appIdec6.PNG' alt='soy IDEC' className='expImg' />
            </div>
          </Modal>
          <div className='flex justify-around w-full items-center'>
            <img
              src='/firebase.png'
              alt='logo firebase'
              className='w-7 h-7 underline'
            />
            <img
              src='/react-native.png'
              alt='logo react-native'
              className='w-7 h-7'
            />
            <img src='/node.png' alt='logo nodejs' className='w-7 h-7' />
          </div>
        </article>

        {/* Card App soy iglesia web */}
        <article className='expArticle'>
          <div className='flex flex-col justify-center items-center'>
            <h4>App web para iglesia</h4>
            <label className='text-sm text-green-600 '>freelance</label>
          </div>
          <div className='p-2'>
            <label className='font-semibold mb-3 text-blue-400'>Cargo:</label>
            <p className=''>
              Encargado de desarrollo de la aplicacion y diseño
            </p>
          </div>
          <Modal title='Move'>
          <div className='grid gap-3'>
              <img src='/soyiglesia.png' alt='soy IDEC' className='expImg' />
              <img src='/soyIglesia2.png' alt='soy IDEC' className='expImg' />
            </div>
          </Modal>
          <div className='flex justify-around w-full items-center'>
            <img
              src='/firebase.png'
              alt='logo firebase'
              className='w-7 h-7 underline'
            />
            <img
              src='/react-native.png'
              alt='logo react-native'
              className='w-7 h-7'
            />
            <img src='/node.png' alt='logo nodejs' className='w-7 h-7' />
          </div>
        </article>
      </section>
    </>
  );
};

export default Experiencias;
