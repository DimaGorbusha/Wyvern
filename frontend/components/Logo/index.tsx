import Link from 'next/link';
import Props from './Logo.props';
import LogoIcon from '@assets/common/ic_logo.svg';

const Logo: React.FC<Props> = ({ className = '' }) => {
    return (
        <Link className={`${className}`} href='/'>
            <LogoIcon />
        </Link>
    );
}