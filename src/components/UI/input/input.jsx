import style from './input.module.css';

const Input = ({
  type = 'text',
  id,
  value,
  className,
  placeHolder,
  name,
  onChange,
  ...restProps
}) => {
  const classList = [style.input, className].join(' ');

  return (
    <input
      {...restProps}
      id={id}
      type={type}
      value={value}
      name={name}
      className={classList}
      placeholder={placeHolder}
      onChange={onChange}
      required
    />
  );
};

export default Input;