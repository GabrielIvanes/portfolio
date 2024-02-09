import error404 from '../assets/images/error-404.png';

function ErrorPage() {
	return (
		<div className='error'>
			<img src={error404} alt='error 404' />
		</div>
	);
}

export default ErrorPage;
