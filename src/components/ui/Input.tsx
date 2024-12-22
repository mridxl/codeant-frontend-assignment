import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full border-none bg-transparent outline-none focus:border-none focus:outline-none focus:ring-0 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
