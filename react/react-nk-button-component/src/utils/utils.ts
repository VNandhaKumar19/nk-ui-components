import { ClassValue, clsx } from "clsx/clsx";
import { twMerge } from "tailwind-merge/dist/types";


export function updateClass(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}