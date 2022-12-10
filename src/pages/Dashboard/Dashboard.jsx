import './Dashboard.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import DashboardCard from '../../components/DashboardCard/DashboardCard';

export default function Dashboard() {
	return (
		<div>
			<PageHeader />
			<DashboardCard />
			<PageFooter />
		</div>
	);
}