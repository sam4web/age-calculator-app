import { useEffect, useState } from 'react';
import { InputField, LineBreak } from './components';

const App = () => {
  const [inputData, setInputData] = useState(null);
  const [refinedData, setRefinedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const isLeap = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };

  // const checkValidDay = () => {
  //   const daysInMonth = [];
  // };

  const checkValidYear = () => {
    const currentYear = new Date().getFullYear();
    if (inputData.year > currentYear) {
      setError((prevError) => ({
        ...prevError,
        year: 'must be in the past',
      }));
    } else if (inputData.year < 1900) {
      setError((prevError) => ({
        ...prevError,
        year: 'must be valid date',
      }));
    }
  };

  const checkValidMonth = () => {
    if (inputData.month < 1 || inputData.month > 12) {
      setError((prevError) => ({
        ...prevError,
        day: 'must be valid date',
      }));
    }
  };

  const checkIsDataProvided = () => {
    let dataProvided = [true, true, true];

    if (!inputData?.day) {
      setError((prevError) => ({
        ...prevError,
        day: 'this field is required',
      }));
      dataProvided[0] = false;
    }

    if (!inputData?.month) {
      setError((prevError) => ({
        ...prevError,
        month: 'this field is required',
      }));
      dataProvided[1] = false;
    }

    if (!inputData?.year) {
      setError((prevError) => ({
        ...prevError,
        year: 'this field is required',
      }));
      dataProvided[2] = false;
    }

    return dataProvided.every((ele) => ele);
  };

  const checkErrors = () => {
    setError(null);
    if (checkIsDataProvided()) {
      checkValidYear();
      checkValidMonth();
    }
  };

  const calculateAge = () => {
    checkErrors();
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
              error={error?.month}
              changeValue={(value) =>
                setInputData((prevInput) => ({ ...prevInput, month: value }))
              }
            />
            <InputField
              label={'year'}
              placeholder={'YY'}
              value={inputData?.year}
              error={error?.year}
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
              </span>{' '}
              years
            </h3>
            <h3 className='data-display'>
              <span className='text-purple'>
                {refinedData ? refinedData.month : '- -'}
              </span>{' '}
              months
            </h3>
            <h3 className='data-display'>
              <span className='text-purple'>
                {refinedData ? refinedData.day : '- -'}
              </span>{' '}
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
