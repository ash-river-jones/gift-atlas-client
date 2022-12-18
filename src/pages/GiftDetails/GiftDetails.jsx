import './GiftDetails.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import GiftDetailsCard from '../../components/GiftDetailsCard/GiftDetailsCard'

export default function GiftDetails() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<GiftDetailsCard />
			</div>
			<PageFooter />
		</div>
	);
}