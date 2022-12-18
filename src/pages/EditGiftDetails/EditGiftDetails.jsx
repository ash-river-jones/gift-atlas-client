import './EditGiftDetails.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import EditGiftDetailsCard from '../../components/EditGiftDetailsCard/EditGiftDetailsCard'

export default function EditGiftDetails() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<EditGiftDetailsCard />
			</div>
			<PageFooter />
		</div>
	);
}