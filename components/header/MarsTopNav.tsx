import {ReactNode} from 'react';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import {faShippingFast} from '@fortawesome/free-solid-svg-icons/faShippingFast';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Importez IconProp

import Link from 'next/link';

export default function MarsTopNav() {
	return (
		<nav className={'mars-top-nav'}>
			<div className={'container-xxl mars-top-nav__container'}>
				<div className={'mars-top-nav__contacts'}>
					<Contact href={'tel:+237693196576'}
									 label={'+237 693-196-576'}
									 icon={<FontAwesomeIcon icon={faPhoneAlt} />}
					/>
					<Contact href={'https://api.whatsapp.com/send?phone=10001234567&text=hello'}
									 label={'+237 693-196-576'}
									 icon={<FontAwesomeIcon icon={faWhatsapp as IconProp} />}
					/>
				</div>
				<div className={'mars-top-nav__note'}>
					<p>
						Horaires 9 a.m. - 6 p.m. <FontAwesomeIcon icon={faShippingFast} className={'text-theme-color ms-1'} />
					</p>
				</div>
				<ul className={'mars-top-nav__menu list-unstyled'}>
					<li className={'mars-top-nav__menu-item'}>
						<Link href={'/shipping'} className='mars-top-nav__menu-link'>
							Livraison
						</Link>
					</li>
					<li className={'mars-top-nav__menu-item'}>
						<Link href={'/about'} className='mars-top-nav__menu-link'>
							A Propos
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

const Contact = ({href, label, icon}: {href: string, label: string, icon?: ReactNode}) => {
	return (
		<div className={'mars-top-nav__contact'}>
			{icon &&
			<a className={'mars-top-nav__contact-icon'} href={href}>{icon}</a>}
			<a className={'mars-top-nav__contact-txt'} href={href}>
				{label}
			</a>
		</div>
	);
};