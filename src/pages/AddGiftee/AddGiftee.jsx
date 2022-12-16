import './AddGiftee.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import AddGifteeCard from '../../components/AddGifteeCard/AddGifteeCard';

export default function AddGiftee() {
	return (
		<div>
			<PageHeader />
			<AddGifteeCard />
			<PageFooter />
		</div>
	);
}