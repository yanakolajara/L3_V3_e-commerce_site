import { FormInput } from './FormInput';

export const Form = ({ children, ...props }) => {
  return <form className='auth-form'>{children}</form>;
};

Form.Input = FormInput;
Form.Submit = ({ children, ...props }) => {
  return (
    <input
      type='submit'
      value={children}
      className='auth-form__submit'
      {...props}
    />
  );
};
export default Form;
