import Props from './LoginLayout.props';
import LoginImage from '@/assets/Login/loginImg.svg';    

const LoginLayout: React.FC<Props> = ({ children, className = '', ...props}) => {
    return(
        <section className={className + ' flex'} {...props}>
            <div>
                <LoginImage className='w-[549px] h-[810px]' />
            </div>
            <div>
                <div>
                    { children }
                </div>
            </div>
        </section>
    );

};

export default LoginLayout;