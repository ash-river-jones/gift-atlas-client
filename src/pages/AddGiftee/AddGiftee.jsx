import './AddGiftee.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import AddGifteeCard from '../../components/AddGifteeCard/AddGifteeCard';

export default function AddGiftee() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<AddGifteeCard />
			</div>
			<PageFooter />
		</div>
	);
}