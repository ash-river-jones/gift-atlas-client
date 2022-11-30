import './Home.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import HomeCard from '../../components/HomeCard/HomeCard';

export default function Home() {
	return (
		<div>
			<PageHeader />
			<HomeCard />
			<PageFooter />
		</div>
	);
}