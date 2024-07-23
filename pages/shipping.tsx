import MainLayout from '../layouts/Main';
import {IMenuItem} from '../@types/components';
import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';

export default function ShippingPage({mainMenu, footerMenu}: IShippingPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Livraison</h1>
				<div className='text-container'>

<h2>Options de livraison:</h2>

<ul>
	<li>Retrait à la ferme (gratuit)</li>
	<li>Livraison locale (10 km, à 1000 Frs cfa)</li>
	<li>Expédition (5-7 jours ouvrables, frais selon destination)</li>
</ul>

<h2>Délais de livraison:</h2>

<ul>
	<li>Retrait: Le lendemain</li>
	<li>Locale: 2-3 jours ouvrables</li>
	<li>Expédition: 5-7 jours ouvrables</li>
</ul>

<h2>Informations importantes:</h2>

<ul>
	<li>Adresse complète requise</li>
	<li>Pas de livraison aux boîtes postales</li>
	<li>Signature à la livraison</li>
</ul>

						</div>
				</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IShippingPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			...menus
		}
	};
};

interface IShippingPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}