import './Dashboard.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import DashboardCard from '../../components/DashboardCard/DashboardCard';

export default function Dashboard() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<DashboardCard />
			</div>
			<PageFooter />
		</div>
	);
}