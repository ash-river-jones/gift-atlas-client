import './RequestGiftForm.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import RequestGiftFormCard from '../../components/RequestGiftFormCard/RequestGiftFormCard';

export default function RequestGiftForm() {
	return (
		<div>
			<PageHeader />
			<div className="page_wrapper">
				<RequestGiftFormCard />
			</div>
			<PageFooter />
		</div>
	);
}