import { useState } from 'react';
import { InputField, LineBreak } from './components';

const App = () => {
  const [inputData, setInputData] = useState(null);
  const [refinedData, setRefinedData] = useState(null);
  const [error, setError] = useState(null);

  const isLeap = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };

  const daysInMonth = [
    31,
    isLeap(inputData?.year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

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

  const checkValidDay = () => {
    if (
      inputData.day > daysInMonth[inputData.month - 1] ||
      inputData.day <= 0
    ) {
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
      checkValidDay();
    }
  };

  const calcDateDiff = () => {
    const dateNow = new Date();
    let yearDiff = dateNow.getFullYear() - inputData.year;
    let monthDiff = dateNow.getMonth() - inputData.month + 1;
    let dayDiff = dateNow.getDate() - inputData.day;

    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[inputData.month - 1];
    }

    return [yearDiff, monthDiff, dayDiff];
  };

  const calculateAge = () => {
    checkErrors();
    if (!error) {
      const [year, month, day] = calcDateDiff();
      setRefinedData({
        year: year,
        month: month,
        day: day,
      });
    }
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
