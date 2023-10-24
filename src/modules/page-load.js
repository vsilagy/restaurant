import { content } from '../index.js';
import { createElement } from './utils.js';
import { createNav, handleTabClick } from './nav.js';

export function loadPage() {
	content.appendChild(createNav());
	content.appendChild(main);
	handleTabClick();
}

export const main = createElement('div', { className: 'main' });
