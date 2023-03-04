import LoginLayout from '@/layouts/LoginLayout';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

interface IFormik {
	tel: string;
	passwordRepeat: string;
}

const LoginPage = (): JSX.Element => {
	const router = useRouter();

	const formik = useFormik<IFormik>({
		initialValues: {
			tel: '',
			passwordRepeat: '',
		},
		validationSchema: Yup.object().shape({
			password: Yup.string().required('Это обязательное поле'),
			passwordRepeat: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: () => router.push('/'),
	});

	return (
		<LoginLayout>
			<h1 className='text-heading-2 mt-28'>
				Вход
			</h1>
			<p className='text-BodyText_14 text-darkGrey mt-4'>
                честный и точный учёт, экономь, доверяй,
                <br />
                узнавай вместе с нами✌️ 
			</p>
			<form onSubmit={formik.handleSubmit} className='max-w-[420px] mt-6 grid gap-[14px]'>
				<Input
					className='w-full'
					placeholder='Ваш номер телефона'
					type='tel'
					name='tel'
					onChange={formik.handleChange}
					value={formik.values.tel}
					errorMessage={formik.submitCount ? formik.errors.tel : undefined} />
				<Input
					className='w-full'
					placeholder='Ваш пароль'
					type='password'
					name='password'
					onChange={formik.handleChange}
					value={formik.values.passwordRepeat}
					errorMessage={formik.submitCount ? formik.errors.passwordRepeat : undefined} />
				<Button 
                    variant='filled' 
                    color='primary'>
					Войти
				</Button>
			</form>
		</LoginLayout>
	);
};

export default LoginPage;
