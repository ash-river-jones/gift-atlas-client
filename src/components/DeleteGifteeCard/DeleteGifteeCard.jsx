import './DeleteGifteeCard.scss';
import backArrow from "../../assets/icons/arrow_back-24px.svg"
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_URL || '';

export default function DeleteGifteeCard() {
	const token = sessionStorage.authToken
	const navigate = useNavigate();
	const params_obj = useParams()
	const giftee_id = params_obj.giftee_id
    
	const [gifteeData, setGifteeData] = useState({})

	useEffect(() => {
		axios
			.get(`${API_URL}/giftees/${giftee_id}`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				setGifteeData(response.data[0])
			})
	},[giftee_id, token])

	const handelDelete = () => {
		axios
			.delete(`${API_URL}/giftees/${giftee_id}`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(() => {
				navigate(`/dashboard`)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	
	return (
		<>
			<main className='delete-giftee'>
				<section className='delete-giftee__header'>
					<div className='delete-giftee__header-wrapper'>
						<Link to={`/dashboard`}><img className='delete-giftee__back-arrow' src={backArrow} alt="Back arrow to giftee profile" /></Link>
						<h1 className='delete-giftee__heading'>Delete Giftee</h1>
					</div>
				</section>
				<section className='delete-giftee-details__wrapper'>
					<h2 className="delete-giftee-details__heading">Delete {gifteeData.name}?</h2>
					<p className="delete-giftee-details__info">Please confirm that you’d like to delete {gifteeData.name}. You
					won’t be able to undo this action.</p>
				</section>
				<div className='delete-giftee__btn-container'>
					<div className='delete-giftee__btn-wrapper--cancel'><button type="button" className='delete-giftee__btn--cancel' onClick={()=>{navigate(`/dashboard`)}}>Cancel</button></div>
					<div className='delete-giftee__btn-wrapper--submit'><button type="button" className='delete-giftee__btn--submit' onClick={handelDelete}>Delete</button></div>
				</div>
			</main>
		</>
	);
}