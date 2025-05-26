export const FORM_FIELDS = {
  LOGIN: [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
      className: 'email lg',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      required: true,
      className: 'password lg',
    },
  ],
  SIGNUP: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true,
      className: 'first-name sm',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      required: true,
      className: 'last-name sm',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
      className: 'email lg',
    },
    {
      name: 'confirmEmail',
      type: 'email',
      label: 'Email Confirmation',
      required: true,
      className: 'confirm-email lg',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      required: true,
      className: 'password lg',
      helpText:
        '(at least 12 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character)',
    },
  ],
};
