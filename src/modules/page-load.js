import { content } from '../index.js';
import { createElement } from './utils.js';
import { createNav, handleTabClick } from './nav.js';
import footer from './footer.js';

export function loadPage() {
	content.appendChild(createNav());
	content.appendChild(main);
	content.appendChild(footer());
	handleTabClick();
}

export const main = createElement('div', { className: 'main' });
