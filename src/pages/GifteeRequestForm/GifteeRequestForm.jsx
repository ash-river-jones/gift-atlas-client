import './GifteeRequestForm.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import GifteeRequestFormCard from '../../components/GifteeRequestFormCard/GifteeRequestFormCard'

export default function GifteeRequestForm() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<GifteeRequestFormCard />
			</div>
			<PageFooter />
		</div>
	);
}