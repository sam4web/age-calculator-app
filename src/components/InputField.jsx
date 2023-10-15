const InputField = (props) => {
  const { label, placeholder, value, changeValue, error } = props;
  return (
    <div className='flex flex-col w-full md:w-[160px]'>
      <label htmlFor={label} className='input-label'>
        {label}
      </label>
      <input
        id={label}
        type='number'
        placeholder={placeholder}
        value={value ? value : ''}
        onChange={(e) => changeValue(parseInt(e.target.value))}
        className={`input-field ${error && 'border-light-red'}`}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputField;
