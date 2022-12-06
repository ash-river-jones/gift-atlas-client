import './GifteeDetailsPageCard.scss';
import GifteeDetailsCardMultiGift from '../GifteeDetailsCardMultiGift/GifteeDetailsCardMultiGift'
import GifteeDetailsCardSingleGift from '../GifteeDetailsCardSingleGift/GifteeDetailsCardSingleGift'
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import backArrow from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-24px-inverted.svg'

const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function GifteeDetailsPageCard() {
	const [gifteeData, setGifteeData] = useState([])
	const [gifteeGifts, setGifteeGifts] = useState([])
	const [hasMultipleGifts, setHasMultipleGifts] = useState(false)
	const [gifteeEmailValid, setGifteeEmailValid] = useState(false)
	const [daysToBirthday, setDaysToBirthday] = useState('mockdata')
	const [daysToNextHoliday, setDaysToNextHoliday] = useState('mockdata')
	
	const {giftee_id} = useParams()
	
	useEffect(() => {
		axios
		.get(`${API_URL}/giftees/${giftee_id}`)
		.then((response) => {
			setGifteeData(response.data[0])
		})

		axios
		.get(`${API_URL}/giftees/${giftee_id}/gifts`)
		.then((response) => {
			setGifteeGifts(response.data)
		})


	},[giftee_id])

	useEffect(() => {
		if(gifteeGifts.length === 0) {
			console.log("Giftee has 0 gifts ---- @Ash - find solution to this issue", gifteeGifts.length, hasMultipleGifts)
		} else if ( gifteeGifts.length === 1){
			setHasMultipleGifts(false)
			setGifteeGifts(gifteeGifts[0])
		} else if (gifteeGifts.length >= 2 ) {
			setHasMultipleGifts(true)
		}
	},[gifteeData, gifteeGifts, hasMultipleGifts])

	useEffect(() => {
		if (gifteeData.email) {
			setGifteeEmailValid(true)
		} else {
			setGifteeEmailValid(false)
		}	
	},[gifteeData.email])
	
	


	return (
		<>
			<main className='giftee-deets'>
				<section className="giftee-deets__header">
					<div className="giftee-deets__header-section"><Link className='giftee-deets__link' to={`/`}><img src={backArrow} alt="Back Arrow" /></Link><h1 className="giftee-deets__title">{gifteeData.name}</h1></div>
					<div className="giftee-deets__header-section giftee-deets__edit"><Link to={`/${giftee_id}/edit`}><img src={editIcon} alt="Edit Giftee Button" className='giftee-deets__edit-icon'/></Link></div>
				</section>
				<section className='details'>
					<div className='details__side'>
						<div className='details__section'>
							<h4 className='details__subheader'>RELATIONSHIP</h4>
							<p className='details__info'>{gifteeData.relationship}</p>
						</div>
						<div className='details__section'>
							<h4 className='details__subheader'>BIRTHDAY</h4>
							<p className='details__info'>{gifteeData.birthday}</p>
							<p className='details__info'>{daysToBirthday}</p>
						</div>
					</div>
					<div className='details__side'>
						<div className='details__section'>
							<Link to={`/${giftee_id}/requestgift`}><h3 className='details__request-btn'>Request Gift Idea</h3></Link>
						</div>
						<div className='details__section'>
							<h4 className='details__subheader'>NEXT HOLIDAY</h4>
							<p className='details__info'>{gifteeData.next_holiday}</p>
							<p className='details__info'>{daysToNextHoliday}</p>
						</div>
					</div>
				</section>
				<section className='gifts'>
					{hasMultipleGifts ? 
						gifteeGifts
							.map((data)=>{
								return(
								<div key={data.gift_id}>
									<GifteeDetailsCardMultiGift
										key={data.gift_id}
										gift_id={data.gift_id}
										giftee_id={data.giftee_id}
										user_id={data.user_id}
										gift_status={data.gift_status}
										item_description={data.item_description}
										item_name={data.item_name}
										order_number={data.order_number}
										price={data.price}
										product_link={data.product_link}
										retailer={data.retailer}
										tracking_number={data.tracking_number}
									/>
								</div>
							)})
					:
					<GifteeDetailsCardSingleGift 
						gift_id={gifteeGifts.gift_id}
						giftee_id={gifteeGifts.giftee_id}
						user_id={gifteeGifts.user_id}
						gift_status={gifteeGifts.gift_status}
						item_description={gifteeGifts.item_description}
						item_name={gifteeGifts.item_name}
						order_number={gifteeGifts.order_number}
						price={gifteeGifts.price}
						product_link={gifteeGifts.product_link}
						retailer={gifteeGifts.retailer}
						tracking_number={gifteeGifts.tracking_number}
					/>
					}
				</section>
			</main>
		</>
	);
}