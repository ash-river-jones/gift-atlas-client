import './EditGifteeDetails.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import EditGifteeDetailsCard from '../../components/EditGifteeDetailsCard/EditGifteeDetailsCard'

export default function EditGifteeDetails() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<EditGifteeDetailsCard />
			</div>
			<PageFooter />
		</div>
	);
}