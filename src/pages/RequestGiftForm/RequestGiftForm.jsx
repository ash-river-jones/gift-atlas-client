import './RequestGiftForm.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import RequestGiftFormCard from '../../components/RequestGiftFormCard/RequestGiftFormCard';

export default function RequestGiftForm() {
	return (
		<div>
			<PageHeader />
			<RequestGiftFormCard />
			<PageFooter />
		</div>
	);
}