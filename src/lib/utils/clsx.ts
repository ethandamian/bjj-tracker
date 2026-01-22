type ClassValue =
    | string
    | number
    | boolean
    | undefined
    | null
    | { [key: string]: any }
    | ClassValue[];

export function clsx(...args: ClassValue[]): string {
    const classes: string[] = [];

    args.forEach((arg) => {
        if (!arg) return; // Ignora valores falsy (null, undefined, false, "")

        if (typeof arg === "string" || typeof arg === "number") {
            classes.push(arg.toString());
        } else if (Array.isArray(arg)) {
            // Si es array, aplicamos recursividad
            const inner = clsx(...arg);
            if (inner) classes.push(inner);
        } else if (typeof arg === "object") {
            // Si es objeto, iteramos sobre sus llaves
            Object.entries(arg).forEach(([key, value]) => {
                if (value) classes.push(key);
            });
        }
    });

    return classes.join(" ");
}
