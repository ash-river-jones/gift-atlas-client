import './GifteeDetailsCardMultiGift.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import { Link } from 'react-router-dom';

export default function GifteeDetailsCardMultiGift({ gift_id, giftee_id, gift_status, item_name, price, retailer }) {
	
	
	return (
		<>
			<section className='multi-gift'>
				<div className='multi-gift__wrapper'>
					<ul className="multi-gift__side">
						<li className='multi-gift__detail-section'>
							<h4 className='multi-gift__heading'>GIFT IDEA</h4>
							<Link to={`/${giftee_id}/${gift_id}`}><p className='multi-gift__info multi-gift__info-link'>{item_name}</p></Link>
						</li>
						<li className='multi-gift__detail-section'>
							<h4 className='multi-gift__heading'>RETAILER</h4>
							<p className='multi-gift__info'>{retailer}</p>
						</li>
						<li className="multi-gift__detail-section">
							<div className='multi-gift__info-section'><Link to={`/${giftee_id}/${gift_id}/delete`}><img src={deleteIcon} alt="Edit Gift Icon" /></Link></div>
						</li>
					</ul>
					<ul className="multi-gift__side">
						<li className='multi-gift__detail-section'>
							<h4 className='multi-gift__heading'>STATUS</h4>
							<p className='multi-gift__info multi-gift__gift-status'>{gift_status}</p>
						</li>
						<li className='multi-gift__detail-section'>
							<h4 className='multi-gift__heading'>PRICE</h4>
							<p className='multi-gift__info'>{`$${price}`}</p>
						</li>
						<li className='multi-gift__detail-section'>
							<div className='multi-gift__info-section multi-gift__edit'><Link to={`/${giftee_id}/${gift_id}/edit`}><img src={editIcon} alt="Edit Giftee Icon" /></Link></div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}