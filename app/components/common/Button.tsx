import Link from "next/link";
import { ButtonProps } from "../../types/allTypes";

function Button({ children, link }: ButtonProps) {
  return (
    <Link href={link} className="button">
      {children}
    </Link>
  );
}

export default Button;
