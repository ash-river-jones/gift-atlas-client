import './GifteeDetailsPageCard.scss';
import GifteeDetailsCardMultiGift from '../GifteeDetailsCardMultiGift/GifteeDetailsCardMultiGift'
import GifteeDetailsCardSingleGift from '../GifteeDetailsCardSingleGift/GifteeDetailsCardSingleGift'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
			console.log(response.data[0])

			if (response.data[0].email) {
				setGifteeEmailValid(true)
			} else {
				setGifteeEmailValid(false)
			}
		})

		axios
			.get(`${API_URL}/giftees/${giftee_id}/gifts`)
			.then((response) => {
				setGifteeGifts(response.data)
				console.log(response.data)
			})
		
		if(gifteeGifts.length === 1) {
			setHasMultipleGifts(false)
		} else {
			setHasMultipleGifts(true)
		}
	},[giftee_id, gifteeGifts.length])
	

	return (
		<>
			<main className='giftee-deets'>
				<section className="giftee-deets__header">
					<div className="giftee-deets__header-section"><img src={``} alt="Back Arrow" /><h1 className="giftee-deets__title">{gifteeData.name}</h1></div>
					<div className="giftee-deets__header-section"><img src={``} alt="Edit Giftee Button" /></div>
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
							<h3 className='details__request-btn'>Request Gift Idea</h3>
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
							})
					: 
					<GifteeDetailsCardSingleGift 
						key={gifteeGifts[0].gift_id}
						gift_id={gifteeGifts[0].gift_id}
						giftee_id={gifteeGifts[0].giftee_id}
						user_id={gifteeGifts[0].user_id}
						gift_status={gifteeGifts[0].gift_status}
						item_description={gifteeGifts[0].item_description}
						item_name={gifteeGifts[0].item_name}
						order_number={gifteeGifts[0].order_number}
						price={gifteeGifts[0].price}
						product_link={gifteeGifts[0].product_link}
						retailer={gifteeGifts[0].retailer}
						tracking_number={gifteeGifts[0].tracking_number}
					/>
					}
				</section>
			</main>
		</>
	);
}