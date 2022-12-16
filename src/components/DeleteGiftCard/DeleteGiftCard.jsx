import './DeleteGiftCard.scss';
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function DeleteGiftCard() {
	const token = sessionStorage.authToken
	const navigate = useNavigate();
	const params_obj = useParams()
	const giftee_id = params_obj.giftee_id
    const gift_id = params_obj.gift_id

	const [giftData, setGiftData] = useState({})
	const [gifteeData, setGifteeData] = useState({})

	
	useEffect(() => {
		axios
			.get(`${API_URL}/gifts/${gift_id}`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				setGiftData(response.data[0])
			})

		axios
			.get(`${API_URL}/giftees/${giftee_id}`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				setGifteeData(response.data[0])
			})
	},[gift_id, giftee_id, token])

	const handelDelete = () => {
		axios
			.delete(`${API_URL}/gifts/${gift_id}`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(() => {
				navigate(`/${giftee_id}`)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<>
			<main className='delete-gift'>
				<section className='delete-gift__header'>
					<div className='delete-gift__header-wrapper'>
						<Link to={`/${giftee_id}`}><img className='delete-gift__back-arrow' src={backArrow} alt="Back arrow to giftee profile" /></Link>
						<h1 className='delete-gift__heading'>Delete Gift</h1>
					</div>
				</section>
				<section className='delete-gift-details__wrapper'>
					<h2 className="delete-gift-details__heading">Delete {giftData.item_name} from {gifteeData.name}?</h2>
					<p className="delete-gift-details__info">Please confirm that you’d like to delete {giftData.item_name} from {gifteeData.name}. You
					won’t be able to undo this action.</p>
				</section>
				<div className='delete-gift__btn-container'>
					<div className='delete-gift__btn-wrapper--cancel'><button type="button" className='delete-gift__btn--cancel' onClick={()=>{navigate(`/${giftee_id}`)}}>Cancel</button></div>
					<div className='delete-gift__btn-wrapper--submit'><button type="button" className='delete-gift__btn--submit' onClick={handelDelete}>Delete</button></div>
				</div>
			</main>
		</>
	);
}