import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className='border-2 border-blue-500 px-3 py-1.5 text-lg rounded-md hover:bg-blue-500 transition hover:text-white font-sans'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </>
  );
};

export default Counter;
