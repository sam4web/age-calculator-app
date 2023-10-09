const App = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-white-off px-3'>
        <main className='bg-white rounded-2xl max-w-xl md:max-w-4xl w-full p-14'>
          <div className='flex gap-9'>
            <div className='flex flex-col max-w-[150px] w-full'>
              <label
                htmlFor='day'
                className='text-md uppercase text-grey-smokey tracking-[4px] font-normal'
              >
                day
              </label>
              <input
                id='day'
                type='number'
                min={1}
                max={32}
                placeholder='DD'
                className='border-2 border-gray-smokey outline-none rounded-lg px-4 py-3 text-3xl mt-3 placeholder:text-grey-light text-off-black focus:border-purple focus:placeholder:text-transparent transition'
              />
            </div>
            {/* /input-field */}
            <div className='flex flex-col max-w-[150px] w-full'>
              <label
                htmlFor='month'
                className='text-md uppercase text-grey-smokey tracking-[4px] font-normal'
              >
                month
              </label>
              <input
                id='month'
                type='number'
                min={1}
                max={12}
                placeholder='mm'
                className='border-2 border-gray-smokey outline-none rounded-lg px-4 py-3 text-3xl mt-3 placeholder:text-grey-light text-off-black focus:border-purple focus:placeholder:text-transparent transition'
              />
            </div>
            {/* /input-field */}
            <div className='flex flex-col max-w-[150px] w-full'>
              <label
                htmlFor='year'
                className='text-md uppercase text-grey-smokey tracking-[4px] font-normal'
              >
                year
              </label>
              <input
                id='year'
                type='number'
                placeholder='YYYY'
                className='border-2 border-gray-smokey outline-none rounded-lg px-4 py-3 text-3xl mt-3 placeholder:text-grey-light text-off-black focus:border-purple focus:placeholder:text-transparent transition'
              />
            </div>
            {/* /input-field */}
            {/* <div>
              <label htmlFor='month'>month</label>
              <input
                id='month'
                type='number'
                min={1}
                max={12}
                className='border-2 border-gray-smokey'
              />
            </div>
            <div>
              <label htmlFor='year'>year</label>
              <input
                id='year'
                type='number'
                className='border-2 border-gray-smokey'
              />
            </div> */}
          </div>
          {/* /input-container */}

          <section></section>
          {/* /data */}
        </main>
      </div>
    </>
  );
};

export default App;
