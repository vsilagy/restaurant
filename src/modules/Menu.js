import { main } from './page-load';
import { createElement } from './utils';

export default function Menu() {
	const menu = createElement('div', {
		className: 'hero',
	});
	const heading = createElement('h2', { content: `Chef's favorite` });
	const wrapper = createElement('div', { className: 'menu-wrapper' });

	const items = [
		createMenu(
			'Spaghetti Carbonara',
			'Spaghetti pasta tossed in a creamy sauce with pancetta, eggs, Pecorino Romano cheese, and black pepper.',
		),
		createMenu(
			'Bolognese Spaghetti',
			'Spaghetti pasta with a rich and hearty meat sauce made with ground beef, tomatoes, and aromatic spices',
		),
		createMenu(
			'Lasagna',
			'Layers of pasta, ricotta, mozzarella, and a savory meat sauce',
		),
		createMenu(
			'Chicken Parmesan',
			'Breaded and fried chicken cutlet topped with marinara sauce and melted mozzarella, served over spaghetti.',
			'24',
		),
		createMenu(
			'Chicken Milanese',
			' Breaded and pan-fried chicken breast served with a fresh arugula salad, cherry tomatoes, and a drizzle of balsamic reduction.',
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
