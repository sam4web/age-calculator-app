import { useEffect, useState } from 'react';
import { InputField, LineBreak } from './components';

const App = () => {
  const [data, setData] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-white-off px-3'>
        <main className='bg-white rounded-2xl max-w-xl md:max-w-4xl w-full px-5 sm:px-7 py-12 md:p-14'>
          <div className='flex gap-3 md:gap-8 w-full'>
            <InputField
              label={'day'}
              placeholder={'DD'}
              value={data.day}
              changeValue={(value) =>
                setData((prevData) => ({ ...prevData, day: value }))
              }
            />
            <InputField
              label={'month'}
              placeholder={'MM'}
              value={data.month}
              changeValue={(value) =>
                setData((prevData) => ({ ...prevData, month: value }))
              }
            />
            <InputField
              label={'year'}
              placeholder={'YY'}
              value={data.year}
              changeValue={(value) =>
                setData((prevData) => ({ ...prevData, year: value }))
              }
            />
          </div>
          {/* /input-container */}

          <LineBreak />

          <section></section>
          {/* /data */}
        </main>
      </div>
    </>
  );
};

export default App;
