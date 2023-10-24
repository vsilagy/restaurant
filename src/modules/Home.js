import { createElement } from './utils';
import { main } from './page-load';

export default function Home() {
	const hero = createElement('div', { className: 'hero' });
	const heading = createElement('h2', {
		content: 'Exquisite dining since 1989',
	});
	const text = createElement('p', {
		content:
			'Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.',
	});
	const button = createElement('button', {
		className: 'cta-btn',
		content: 'Book a table',
	});

	hero.appendChild(heading);
	hero.appendChild(text);
	hero.appendChild(button);
	main.appendChild(hero);
}
