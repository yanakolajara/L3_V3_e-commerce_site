export const FormInput = ({ field, value, onChange }) => {
  const isNameField = field.name === 'firstName' || field.name === 'lastName';

  return (
    <label
      htmlFor={field.name}
      className={field.className || ''}
      style={isNameField ? { flex: 1 } : {}}
    >
      {field.label}
      <input
        type={field.type}
        name={field.name}
        id={field.name}
        value={value}
        onChange={onChange}
        required={field.required}
      />
      <p>{field.helpText}</p>
    </label>
  );
};
