import type { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "@/lib/utils";

import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    icon?: ReactNode;
    children?: ReactNode;
}

export const Button = ({
    variant = "primary",
    icon,
    children,
    className = "",
    ...props
}: ButtonProps) => {
    const btnClasses = clsx(
        "btn",
        `btn-${variant}`,
        {
            "btn-icon-only": icon && !children,
        },
        className
    );

    return (
        <button className={btnClasses} {...props}>
            {icon && <span className="btn-icon">{icon}</span>}
            {children && <span className="btn-text">{children}</span>}
        </button>
    );
};
