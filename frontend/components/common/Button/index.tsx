import Props from "./Button.props";
import getButtonStyle from "./Button.styles";

const Button: React.FC<Props> = ({ className = '', variant, color, children, ...props }): JSX.Element => {
    return (
        <button className={getButtonStyle(variant, color) + className} {...props}>
            { children }
        </button>
    );
};

export default Button;