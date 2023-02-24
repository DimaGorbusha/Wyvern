import { buttonVariants, buttonColors } from "./Button.props";

const COMMON_STYLES = 'rounded-2xl text-center'

export default function getButtonStyle(variant: buttonVariants, color: buttonColors): string {
    let bgColor = '';
    let borderColor = '';

    switch(color){
        case 'primary':
            bgColor = 'bg-primary';
            borderColor = 'border-primary';
            break;
        case 'red':
            bgColor = 'bg-red';
            borderColor = 'border-red';
    };

    switch(variant) {
        case 'filled':
            return `${COMMON_STYLES} ${bgColor} text-white`;
        case 'stroke':
            return `${COMMON_STYLES} ${borderColor} border-2 text-white`;
        case 'icon':
            return `${bgColor} inline-block`;
    };
}