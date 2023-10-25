import { main } from './page-load';
import menuImg from '../images/menu.jpg';
import { createElement } from './utils';

export default function Menu() {
	const menu = createElement('div', {
		className: 'hero',
	});
	const heading = createElement('h2', { content: 'Our Menu' });
	const wrapper = createElement('div', { className: 'menu-wrapper' });

	const items = [
		createMenu(
			'Margherita Pizza',
			'Classic pizza with tomato sauce, mozzarella cheese, fresh basil, and a drizzle of olive oil.',
			'22',
		),
		createMenu(
			'Spaghetti Carbonara',
			'Spaghetti pasta tossed in a creamy sauce with pancetta, eggs, Pecorino Romano cheese, and black pepper.',
			'20',
		),

		createMenu(
			'Chicken Parmesan',
			'Breaded and fried chicken cutlet topped with marinara sauce and melted mozzarella, served over spaghetti.',
			'24',
		),
		createMenu(
			'Chicken Milanese',
			' Breaded and pan-fried chicken breast served with a fresh arugula salad, cherry tomatoes, and a drizzle of balsamic reduction.',
			'26',
		),
		createMenu(
			'Bolognese Spaghetti',
			'Spaghetti pasta with a rich and hearty meat sauce made with ground beef, tomatoes, and aromatic spices',
			'22',
		),
		createMenu(
			'Lasagna',
			'Layers of pasta, ricotta, mozzarella, and a savory meat sauce',
			'25',
		),
		createMenu(
			'Penne alla Vodka',
			'Penne pasta in a creamy tomato and vodka sauce, garnished with fresh basil and Parmesan cheese.',
			'22',
		),
		createMenu(
			'Tiramisu',
			'A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.',
			'12',
		),
	];

	items.forEach((item) => wrapper.appendChild(item));

	menu.appendChild(heading);
	menu.appendChild(wrapper);
	main.appendChild(menu);
}

function createMenu(name, description) {
	const menuItem = createElement('div', { className: 'menu-item' });
	const menuTitle = createElement('h3', {
		className: 'menu-title',
		content: `${name}`,
	});
	const menuText = createElement('p', {
		className: 'menu-text',
		content: `Ingredients: ${description}`,
	});
	// const menuPrice = createElement('p', {
	// 	className: 'menu-price',
	// 	content: `${price} $`,
	// });

	menuItem.appendChild(menuTitle);
	menuItem.appendChild(menuText);

	return menuItem;
}
