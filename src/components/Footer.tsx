import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Info = ({ icon, info }: { icon: JSX.Element; info: string | number }) => {
  return (
    <div className='flex items-center'>
      {icon}
      <label className='ml-3'>{info}</label>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='flex  justify-between p-2 bg-blue-50 snap-center'>
      <img src='../footer.png' alt='code img' className=' w-80 h-80' />
      <section id='contact' className='flex flex-col'>
        <h3 className='font-semibold text-center text-xl text-blue-950 mb-10'>
          Informacion de Contacto
        </h3>
        <Info info={'30948390'} icon={<PhoneIcon className='iconContact' />} />
        <Info
          info={'Puerto Barrios, Izabal, Guatemala'}
          icon={<MapPinIcon className='iconContact' />}
        />
        <Info
          info={'bisrael.apps@gmail.com'}
          icon={<EnvelopeIcon className='iconContact' />}
        />
        <a
          className='text-red-600 text-center font-mono mt-3'
          href='https://drive.google.com/file/d/19MlnRv2sXyXjhifoZMhinJdz6DW1xUBM/view?usp=drive_link'
        >
          ver curriculum
        </a>
      </section>
      <img src='../footer2.png' alt='code img' className=' w-80 h-80' />
    </footer>
  );
};

export default Footer;
