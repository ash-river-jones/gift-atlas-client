import './GifteeDetailsCardSingleGift.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrow from '../../assets/icons/chevron_right-24px.svg';

import { Link } from 'react-router-dom';


const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function GifteeDetailsCardSingleGift({ giftee_name, gift_id, giftee_id, user_id, gift_status, item_description, item_name, order_number, price, product_link, retailer, tracking_number }) {

	return (
		<>
			<section className='single-gift'>
				<div className='single-gift__wrapper'>
					<div className=''>
					<div className='single-gift__details-top'>
						<h1 className='single-gift__name'>{item_name}</h1>
					</div>
					<div className='single-gift__details-top'>
						<h4 className='single-gift__desc'>ITEM DESCRIPTION:</h4>
						<p className='single-gift__desc-deets'>{item_description}</p>
					</div>
					</div>
					<div className='single-gift__sides-wrapper'>
					<div className="single-gift__side">
						<div className='single-gift__detail-section'>
							<h4 className='single-gift__heading'>RETAILER</h4>
							<p className='single-gift__info'>{retailer}</p>
						</div>
						<div className='single-gift__detail-section'>
							<h4 className='single-gift__heading'>STATUS</h4>
							<p className='single-gift__info  single-gift__gift-status'>{gift_status}</p>
						</div>
						<div className='single-gift__detail-section'>
							<h4 className='single-gift__heading'>GIFTEE</h4>
							<p className='single-gift__info'>{giftee_name}</p>
						</div>
						<div className='single-gift__detail-section'>
							<div className='single-gift__info-section single-gift__delete'><Link to={`/${giftee_id}/${gift_id}/delete`}><img src={deleteIcon} alt="Edit Gift Icon" /></Link></div>
						</div>
					</div>
					<div className="single-gift__side">
						<div className='single-gift__detail-section'>
							<h4 className='single-gift__heading'>PRICE</h4>
							<p className='single-gift__info'>{`$${price}`}</p>
						</div>
						<div className='single-gift__detail-section'>
							<h4 className='single-gift__heading'>ORDER NUMBER</h4>
							<p className='single-gift__info'>{order_number}</p>
						</div>
						<div className='single-gift__detail-section'>
							<h4 className='single-gift__heading'>TRACKING NUMBER</h4>
							<a href={`https://www.google.com/search?q=${tracking_number}`} className='single-gift__info--link'><p className='single-gift__info'>{tracking_number}</p></a>
						</div>
						<div className='single-gift__detail-section'>
							<div className='single-gift__info-section single-gift__edit'><Link to={`/${giftee_id}/${gift_id}/edit`}><img src={editIcon} alt="Edit Giftee Icon" /></Link></div>
						</div>
					</div>
					</div>
				</div>
			</section>
		</>
	);
}