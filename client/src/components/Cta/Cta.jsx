/**
 *
 * @param {
 * className?: string,
 * children?: React.ReactNode,
 * iconPosition?: 'left' | 'right',
 * border?: boolean,
 * borderColor?: string,
 * borderWidth?: string,
 * borderRadius?: string,
 * size?: 'md' | 'sm',
 * color?: string,
 * backgroundColor?: string,
 * onClick?: () => void,
 * href?: string,
 * target?: string,
 * renderIcon?: React.ReactNode,
 * } props
 * @returns {JSX.Element}
 */
export const Cta = ({
  className,
  children,
  iconPosition,
  border = false,
  borderColor,
  borderWidth,
  borderRadius,
  size,
  color,
  backgroundColor,
  onClick,
  href,
  renderIcon,
  ...props
}) => {
  const style = {
    border: border ? `${borderWidth} solid ${borderColor}` : 'none',
    borderRadius,
    color,
    backgroundColor,
    fontSize: size === 'md' ? '16px' : '12px',
    padding: size === 'md' ? '10px 20px' : '5px 10px',
    cursor: 'pointer',
  };
  if (href) {
    return (
      <a href={href} style={style} className={className} {...props}>
        {iconPosition === 'left' && renderIcon}
        {children}
        {iconPosition === 'right' && renderIcon}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      href={href}
      style={style}
      className={className}
      {...props}
    >
      {iconPosition === 'left' && renderIcon}
      {children}
      {iconPosition === 'right' && renderIcon}
    </button>
  );
};
