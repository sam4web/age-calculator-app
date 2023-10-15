const InputField = (props) => {
  const { label, placeholder, value, changeValue, error } = props;
  return (
    <div className='flex flex-col w-full md:w-[160px]'>
      <label
        htmlFor={label}
        className={`input-label ${error && 'text-light-red'}`}
      >
        {label}
      </label>
      <input
        id={label}
        type='number'
        placeholder={placeholder}
        min={1}
        value={value ? value : ''}
        onChange={(e) => changeValue(parseInt(e.target.value))}
        className={`input-field ${error && 'border-light-red'}`}
      />
      {error && (
        <p className='error-msg'>
          {error.charAt(0).toUpperCase() + error.slice(1)}.
        </p>
      )}
    </div>
  );
};

export default InputField;
