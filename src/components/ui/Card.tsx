import React from 'react';
import { cn } from '../../lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'card-shadow flex flex-col items-center justify-center rounded-3xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
