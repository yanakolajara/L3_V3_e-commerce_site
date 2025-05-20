export const Cta = ({ renderIcon, children, ...props }) => {
  const style = {
    cursor: 'pointer',
  };
  return (
    <div className='cta' style={style} {...props}>
      {renderIcon && renderIcon()}
      {children}
    </div>
  );
};
