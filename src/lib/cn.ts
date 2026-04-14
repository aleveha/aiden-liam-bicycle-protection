import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ClassValue = Parameters<typeof clsx>[0];

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
