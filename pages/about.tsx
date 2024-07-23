import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import MainLayout from '../layouts/Main';

export default function ShippingPage({mainMenu, footerMenu}: IPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>A propos</h1>
				<div className='text-container'>
				{/* <h1>Bienvenue chez [Nom de votre ferme] !</h1> */}

<p>Nous sommes une exploitation familiale d'élevage de poulets, dédiée à fournir à nos clients du poulet et des œufs frais et de la plus haute qualité. Nos poulets sont élevés dans notre ferme avec soin et attention, et nous nous engageons dans des pratiques d'élevage durables et éthiques.</p>

<h2>Notre mission</h2>

<p>Notre mission est d'offrir à nos clients une alternative plus saine et plus durable au poulet d'élevage industriel. Nous pensons que chacun devrait avoir accès à des aliments délicieux et nutritifs, élevés avec soin et respect pour l'environnement.</p>

<h2>Nos valeurs</h2>

<ul>
	<li>Qualité : Nous nous engageons à fournir à nos clients du poulet et des œufs de la plus haute qualité.</li>
	<li>Durabilité : Nous nous engageons dans des pratiques d'élevage durable qui protègent l'environnement.</li>
	<li>Bien-être animal : Nous pensons que nos poulets méritent d'être élevés dans un environnement sain et respectueux.</li>
	<li>Communauté : Nous nous engageons à soutenir notre communauté locale et à redonner à ceux qui en ont besoin.</li>
</ul>

<h2>Nos produits</h2>

<p>Nous proposons une variété de produits à base de poulet, notamment :</p>

<ul>
	<li>Poulets entiers : Nos poulets entiers sont élevés dans notre ferme et sont parfaits pour rôtir, griller ou cuire au four.</li>
	<li>Poulets découpés : Nous proposons une variété de morceaux de poulet découpés, y compris les poitrines, les cuisses, les ailes et les pilons.</li>
	<li>Poulet haché : Notre poulet haché est fabriqué à partir de notre propre poulet frais et est parfait pour faire des hamburgers, des boulettes de viande et d'autres plats.</li>
	<li>Œufs : Nos œufs proviennent directement de notre ferme et sont disponibles dans une variété de tailles.</li>
</ul>

<p>Nous proposons également une variété d'autres produits, tels que :</p>

<ul>
	<li>Alimentation pour poulets : Nous proposons une variété d'aliments pour poulets, y compris des aliments biologiques et sans OGM.</li>
	<li>Fournitures pour volailles : Nous proposons une variété de fournitures pour volailles, telles que des mangeoires à poussins, des abreuvoirs et de la litière.</li>
	<li>Recettes : Nous proposons une variété de recettes pour cuisiner avec du poulet et des œufs.</li>
</ul>

<h2>Notre engagement envers vous</h2>

<p>Nous nous engageons à offrir à nos clients la meilleure expérience possible. Nous proposons plusieurs façons d'acheter nos produits, notamment :</p>

<ul>
	<li>Vente à la ferme : Vous pouvez acheter nos produits directement à la ferme.</li>
	<li>Livraison : Nous proposons la livraison aux clients locaux.</li>
	<li>Marchés fermiers : Vous pouvez trouver nos produits sur les marchés fermiers locaux.</li>
</ul>


				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			...menus
		}
	};
};

interface IPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}