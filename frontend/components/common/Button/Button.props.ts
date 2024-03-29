import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type buttonVariants = 'filled' | 'stroke' | 'icon';
type buttonColors = 'primary' | 'red';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: buttonVariants;
    color: buttonColors;
}

export default Props;

export type {
    buttonVariants,
    buttonColors,
}