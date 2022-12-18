import './DeleteGiftee.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import DeleteGifteeCard from '../../components/DeleteGifteeCard/DeleteGifteeCard';

export default function DeleteGiftee() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<DeleteGifteeCard />
			</div>
			<PageFooter />
		</div>
	);
}