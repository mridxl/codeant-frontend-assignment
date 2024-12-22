import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
  imgSrc?: string;
  imgAlt?: string;
}

const Button = ({
  onClick,
  children,
  className = '',
  icon,
  imgSrc,
  imgAlt,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-2 rounded-lg border p-3 ${className}`}
    >
      {icon &&
        React.cloneElement(icon, {
          className: `w-5 ${icon.props.className || ''}`,
        } as React.SVGProps<SVGSVGElement>)}
      {imgSrc && <img src={imgSrc} alt={imgAlt || ''} className="w-5" />}
      {children}
    </button>
  );
};

export default Button;
