import { useEffect, useState } from 'react';
import { InputField, LineBreak } from './components';

const App = () => {
  const [input, setInput] = useState(null);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    console.log(input);
  }, [input]);

  const checkErrors = () => {};

  const calculateAge = () => {
    checkErrors();
    console.log(data);
    console.log(errors);
  };

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-white-off px-3'>
        <main className='bg-white rounded-2xl max-w-xl md:max-w-4xl w-full px-5 sm:px-7 py-12 md:p-14'>
          <div className='flex gap-3 md:gap-8 w-full'>
            <InputField
              label={'day'}
              placeholder={'DD'}
              value={input?.day}
              error={errors?.day}
              changeValue={(value) =>
                setInput((prevInput) => ({ ...prevInput, day: value }))
              }
            />
            <InputField
              label={'month'}
              placeholder={'MM'}
              value={input?.month}
              error={errors?.day}
              changeValue={(value) =>
                setInput((prevInput) => ({ ...prevInput, month: value }))
              }
            />
            <InputField
              label={'year'}
              placeholder={'YY'}
              value={input?.year}
              error={errors?.day}
              changeValue={(value) =>
                setInput((prevInput) => ({ ...prevInput, year: value }))
              }
            />
          </div>
          {/* /input-container */}

          <LineBreak calculateAge={calculateAge} />

          <section>
            <h3 className='font-extrabold text-8xl italic mb-7'>
              <span className='text-purple'>{data ? data.year : '- -'}</span>{' '}
              years
            </h3>
            <h3 className='font-extrabold text-8xl italic mb-7'>
              <span className='text-purple'>{data ? data.month : '- -'}</span>{' '}
              months
            </h3>
            <h3 className='font-extrabold text-8xl italic mb-7'>
              <span className='text-purple'>{data ? data.day : '- -'}</span>{' '}
              days
            </h3>
          </section>
          {/* /input */}
        </main>
      </div>
    </>
  );
};

export default App;
