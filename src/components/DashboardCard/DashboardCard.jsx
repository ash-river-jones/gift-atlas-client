import './DashboardCard.scss';
import GifteeProfileCard from '../GifteeProfileCard/GifteeProfileCard';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function DashboardCard() {
	const token = sessionStorage.authToken
	const [gifteeData, setGifteeData] = useState([])
	const [searchInput, setSearchInput] = useState([])

	useEffect(() => {
		axios
			.get(`${API_URL}/giftees`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				setGifteeData(response.data)
			})
			.catch((err) => {console.log(err)})
	},[token])
	
	return (
		<>
			<main className='dash'>
				<section className='dash__header'>
					<h1 className='dash__title'>Giftees</h1>
					<div className="dash__wrapper">
						<div className="dash__search-wrapper"><input className='dash__search' type='text' placeholder='Search...' onChange={(e)=>{setSearchInput(e.target.value.toLocaleLowerCase())}}/></div>
						<div className='dash__new-giftee-wrapper'><Link to={`/add`}><p className='dash__new-giftee-btn'>+ Add New Giftee</p></Link></div>
					</div>
				</section>
				<section className='giftees'>

				{gifteeData
						.filter((data) => {
							return (
								data.name.toLocaleLowerCase().includes(searchInput) ||
								data.relationship.toLocaleLowerCase().includes(searchInput) ||
								data.birthday.toLocaleLowerCase().includes(searchInput) ||
								data.next_holiday.toLocaleLowerCase().includes(searchInput) ||
								data.next_holiday_date.toLocaleLowerCase().includes(searchInput)
							);
						})
						.map((data) => (
							<div key={data.giftee_id}>
								<GifteeProfileCard
									key={data.id}
									giftee_id={data.giftee_id}
									address={data.address}
									birthday={data.birthday}
									email={data.birthday}
									gift_form_opt_in={data.gift_form_opt_in}
									name={data.name}
									next_holiday={data.next_holiday}
									next_holiday_date={data.next_holiday_date}
									phone={data.phone}
									relationship={data.relationship}
									user_id={data.user_id}
								/>

							</div>
						))
					}

				</section>
			</main>
		</>
	);
}