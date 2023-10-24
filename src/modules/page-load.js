import { content } from '../index.js';
import { createNav, handleTabClick } from './nav.js';

export function loadPage() {
	content.appendChild(createNav());
	handleTabClick();
}
