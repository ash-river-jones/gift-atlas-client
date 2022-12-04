import './GifteeDetails.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import GifteeDetailsPageCard from '../../components/GifteeDetailsPageCard/GifteeDetailsPageCard'

export default function GifteeDetails() {
	return (
		<div>
			<PageHeader />
			<GifteeDetailsPageCard />
			<PageFooter />
		</div>
	);
}