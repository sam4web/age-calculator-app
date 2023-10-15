import { useEffect, useState } from 'react';
import { InputField, LineBreak } from './components';

const App = () => {
  const [inputData, setInputData] = useState(null);
  const [refinedData, setRefinedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const checkErrors = () => {};

  const calculateAge = () => {
    checkErrors();
    console.log(refinedData);
    console.log(error);
  };

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-white-off px-3'>
        <main className='bg-white rounded-2xl rounded-br-[7rem] md:rounded-br-[13rem] max-w-xl md:max-w-4xl w-full px-5 sm:px-7 py-12 md:p-14'>
          <div className='flex gap-3 md:gap-8 w-full'>
            <InputField
              label={'day'}
              placeholder={'DD'}
              value={inputData?.day}
              error={error?.day}
              changeValue={(value) =>
                setInputData((prevInput) => ({ ...prevInput, day: value }))
              }
            />
            <InputField
              label={'month'}
              placeholder={'MM'}
              value={inputData?.month}
              error={error?.day}
              changeValue={(value) =>
                setInputData((prevInput) => ({ ...prevInput, month: value }))
              }
            />
            <InputField
              label={'year'}
              placeholder={'YY'}
              value={inputData?.year}
              error={error?.day}
              changeValue={(value) =>
                setInputData((prevInput) => ({ ...prevInput, year: value }))
              }
            />
          </div>
          {/* /input-container */}

          <LineBreak calculateAge={calculateAge} />

          <section>
            <h3 className='data-display'>
              <span className='text-purple'>
                {refinedData ? refinedData.year : '- -'}
              </span>
              years
            </h3>
            <h3 className='data-display'>
              <span className='text-purple'>
                {refinedData ? refinedData.month : '- -'}
              </span>
              months
            </h3>
            <h3 className='data-display'>
              <span className='text-purple'>
                {refinedData ? refinedData.day : '- -'}
              </span>
              days
            </h3>
          </section>
          {/* /data-display */}
        </main>
      </div>
    </>
  );
};

export default App;
