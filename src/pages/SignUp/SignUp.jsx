import './SignUp.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import SignUpCard from '../../components/SignUpCard/SignUpCard';

export default function Login() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<SignUpCard />
			</div>
			<PageFooter />
		</div>
	);
}