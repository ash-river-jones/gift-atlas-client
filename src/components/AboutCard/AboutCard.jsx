import './AboutCard.scss';
import iconCombo from '../../assets/icons/icon-combo.svg';
import giftStress from '../../assets/images/gift-stress.jpeg'
import familyGift from '../../assets/images/family-gift.jpeg'
import holidayStress from '../../assets/images/holiday-stress.jpeg'
import happyGift from '../../assets/images/happy-gift.jpg'
import { useNavigate } from 'react-router-dom';

export default function AboutCard() {
	const navigate = useNavigate()
	return (
		<>
			<main className="about">
				<section className='about__header'>
					<div className='about__header-wrapper'>
						<h1 className="about__heading">About Gift Atlas</h1>
					</div>
				</section>
				<section className='hero'>
					<div className="hero__heading-wrapper">
						<h1 className="hero__heading">Making Holiday Gifting Easy</h1>
						</div>
					<div className="hero__subheading-wrapper">
						<p className="hero__subheading">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolore earum voluptate deserunt. Officiis itaque possimus placeat velit ea illo voluptas libero, voluptate similique totam, labore sit nostrum officia exercitationem!</p>
					</div>
					<div className="hero__img-wrapper">
						<img className='hero__img' src={iconCombo} alt="Hero" />
					</div>
					<div className='hero__login-wrapper'>
						<div onClick={()=>{navigate('/signup')}} className='hero__signup-btn'>Sign Up</div>
						<div onClick={()=>{navigate('/login')}} className='hero__login-btn'>Login</div>
					</div>
				</section>
				<section className='hiw'>
					<div className='hiw__heading-wrapper'>
						<h2 className='hiw__heading'>How It Works</h2>
					</div>
					<div className="hiw__side">
						<div className="hiw__section">
							<img src={holidayStress} alt="Placeholder img" className="hiw__img" />
							<h3 className="hiw__subheader">Holiday Stress about what gifts to get?</h3>
							<p className="hiw__info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos voluptatum natus accusamus ex nostrum quia provident ea iste porro neque ducimus magnam, sit, obcaecati officiis molestias veniam nihil magni.</p>
						</div>
						<div className="hiw__section">
							<img src={giftStress} alt="Placeholder img" className="hiw__img" />
							<h3 className="hiw__subheader">Not knowing what color or size to get?</h3>
							<p className="hiw__info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos voluptatum natus accusamus ex nostrum quia provident ea iste porro neque ducimus magnam, sit, obcaecati officiis molestias veniam nihil magni.</p>
						</div>
					</div>
					<div className="hiw__side">
						<div className="hiw__section">
							<img src={happyGift} alt="Placeholder img" className="hiw__img" />
							<h3 className="hiw__subheader">Knowing exactly what everyone wants</h3>
							<p className="hiw__info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos voluptatum natus accusamus ex nostrum quia provident ea iste porro neque ducimus magnam, sit, obcaecati officiis molestias veniam nihil magni.</p>
						</div>
						<div className="hiw__section">
							<img src={familyGift} alt="Placeholder img" className="hiw__img" />
							<h3 className="hiw__subheader">Staying within your holiday budget</h3>
							<p className="hiw__info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos voluptatum natus accusamus ex nostrum quia provident ea iste porro neque ducimus magnam, sit, obcaecati officiis molestias veniam nihil magni.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}