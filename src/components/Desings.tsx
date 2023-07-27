
const Desings = () => {
  return (
    <>
      <h3 className=' text-xl ml-5 mt-20 font-semibold text-blue-950'>
        Disenos
      </h3>
      <section className='grid grid-cols-3 m-2 gap-2 max-lg:grid-cols-2'>
        <article className='desings'>
          <label className='text-center'>App carnets</label>
          <iframe
            className='figmaFiles'
            src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FgSLjSDwhU3sPeVNJndOMDq%2FAPP-para-carn%25C3%25A9ts%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DW40kg5IU9eygjOPk-1'
          />
          <div className='flex justify-around w-full items-center'>
            <img
              src='../figma.png'
              alt='logo figma'
              className='w-5 h-8 underline'
            />
          </div>
        </article>

        <article className='desings'>
          <label className='text-center'>App Iglesia</label>
          <iframe
            className='figmaFiles'
            src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FAKUpHtXABAw57dfN1lDeqd%2FSoyIglesia%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D5X3j2zMWC5RqJm6S-1'
          />
          <div className='flex justify-around w-full items-center'>
            <img
              src='../figma.png'
              alt='logo figma'
              className='w-5 h-8 underline'
            />
          </div>
        </article>

        <article className='desings'>
          <label className='text-center'>App Iglesia</label>
          <iframe
            className='figmaFiles'
            src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEG1Ual9vW4s2Xafq3tfAme%2FUntitled%3Ftype%3Ddesign%26node-id%3D14%253A507%26mode%3Ddesign%26t%3DW40kg5IU9eygjOPk-1'
          />
          <div className='flex justify-around w-full items-center'>
            <img
              src='../figma.png'
              alt='logo figma'
              className='w-6 h-9 underline'
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Desings;
