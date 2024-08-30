import { MouseEventHandler } from "react";

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: MouseEventHandler;
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
