import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  link: string;
  children: ReactNode;
}

function Button({ children, link }: ButtonProps) {
  return (
    <Link href={link} className="button">
      {children}
    </Link>
  );
}

export default Button;
