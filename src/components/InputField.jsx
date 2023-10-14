const InputField = ({ label, placeholder, value, changeValue }) => {
  return (
    <div className='flex flex-col w-full md:w-[160px]'>
      <label
        htmlFor={label}
        className='text-sm md:text-md uppercase text-grey-smokey tracking-[4px] font-normal mb-3'
      >
        {label}
      </label>
      <input
        id={label}
        type='number'
        placeholder={placeholder}
        value={value ? value : ''}
        onChange={(e) => changeValue(parseInt(e.target.value))}
        className='w-full border-2 border-gray-smokey outline-none rounded-lg px-4 md:px-5 py-4 text-xl md:text-3xl placeholder:text-grey-light text-off-black focus:border-purple focus:placeholder:text-transparent transition'
      />
      {/* <p className='text-light-red text-[15px] font-sans italic mt-2'>
        This field is required
      </p> */}
    </div>
  );
};

export default InputField;
