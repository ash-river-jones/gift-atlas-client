import './Login.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import LoginCard from '../../components/LoginCard/LoginCard';

export default function Login() {
	return (
		<div>
			<PageHeader />
			<LoginCard />
			<PageFooter />
		</div>
	);
}