import './PageFooter.scss';
import email from '../../assets/icons/email.png'
import linkedin from '../../assets/icons/linkedin.svg'
import logo from '../../assets/icons/logo_4.png'

export default function PageFooter() {
	return (
		<>
			<footer className='footer'>
				<div className='footer__header'>
					<h2 className="footer__heading">Get in Touch</h2>
					<div className="footer__social">
						<a href="mailto:gift.atlas.holiday.gift.tracker@gmail.com"><img src={email} alt="Email" /></a>
						<a href="https://www.linkedin.com/in/ash-river-jones/"><img src={linkedin} alt="LinkedIn" /></a>
					</div>
					<div><img src={logo} alt="logo" /></div>
				</div>	
			</footer>
		</>
	);
}