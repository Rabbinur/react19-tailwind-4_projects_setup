const Input = ({ name, placeholder, type, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-[4px] w-full py-[10px] px-[20px]
         outline-1 border focus:border-[#56A279] focus:outline-[#56A279] 
          placeholder:text-[#DDE2E5] placeholder:font-normal placeholder:text-[16px]"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
