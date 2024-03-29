import './PageHeader.scss';
import logo from '../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PageHeader() {
	const [aboutPage, setAboutPage] = useState(false);
	let path = window.location.pathname;

	useEffect(() => {
		if (path === "/" || path === "/login" || path === "/signup" ) {
			setAboutPage(true);
		} else {
			setAboutPage(false);
		}
	}, [path]);

	return (
		<>
			<div className='header'>
				<Link to='/'><div className='header__logo-wrapper'><img className='header__logo' src={logo} alt='' /></div></Link>
				<div className='header__nav'>
					<Link to='/dashboard'><button className={aboutPage ? 'header__nav-item--inactive' : 'header__nav-item--active'}>Dashboard</button></Link>
					<div id='about-btn'><Link to='/'><button className={aboutPage ? 'header__nav-item--active' : 'header__nav-item--inactive'} >About</button></Link></div>
				</div>
			</div>
		</>
	);
}