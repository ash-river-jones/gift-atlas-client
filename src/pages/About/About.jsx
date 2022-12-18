import './About.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import AboutCard from '../../components/AboutCard/AboutCard';

export default function About() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<AboutCard />
			</div>
			<PageFooter />
		</div>
	);
}