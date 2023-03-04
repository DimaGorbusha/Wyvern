import Props from "./Input.props";
import { useState, useRef, MutableRefObject } from "react";

const Input: React.FC<Props> = ({ className = '', errorMessage, placeholder, value, onFocus = () => undefined, 
    onBlur = () => undefined, ...props }): JSX.Element => {

    const [isFocused, setFocused] = useState(false);

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>; 

    function getBorder() {
		if(isFocused)
			return 'border-primary';
		else if(errorMessage)
			return 'border-red';
		else
			return 'border-lightGray';
	}

    return (
		<>
			<div
				className={className + ' h-14 px-4 border-[1px] rounded-2xl ' + getBorder()}
				onClick={() => {
					setFocused(true);
					inputRef.current?.click();
					inputRef.current?.focus();
				}}
			>
				<p className={'font- text-darkGrey transition-all duration-100 '
					+ (isFocused || value ? ' text-xs pt-[10px]' : 'pt-4')}
				>
					{placeholder}
				</p>
				<input
					ref={inputRef}
					onFocus={(e) => {
						setFocused(true);
						onFocus(e);
					}}
					onBlur={(e) => {
						setFocused(false);
						onBlur(e);
					}}
					value={value}
					className={className + ' text-black outline-none bg-transparent mt-0'}
					{...props} />
			</div>
			{errorMessage && (
				<p className='font-semibold text-sm text-red -mt-2 mb-0'>
					{errorMessage}
				</p>
			)}
		</>
    );
};

export default Input;