import './AddGift.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import AddGiftCard from "../../components/AddGiftCard/AddGiftCard";

export default function AddGift() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<AddGiftCard />
			</div>
			<PageFooter />
		</div>
	);
}