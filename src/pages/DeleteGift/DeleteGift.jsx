import './DeleteGift.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import DeleteGiftCard from '../../components/DeleteGiftCard/DeleteGiftCard';

export default function DeleteGiftee() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<DeleteGiftCard />
			</div>
			<PageFooter />
		</div>
	);
}