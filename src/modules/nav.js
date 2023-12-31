import { createElement } from './utils';
import { main } from './page-load';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';

export function createNav() {
	const nav = createElement('div', { className: 'nav' });
	const heading = createElement('h1', {
		className: 'title',
		content: 'delish',
	});
	const tabs = createElement('div', { className: 'tabs' });
	const homeTab = createElement('button', {
		className: 'btn',
		id: 'home',
		content: 'Home',
	});
	homeTab.classList.add('active');
	const menuTab = createElement('button', {
		className: 'btn',
		id: 'menu',
		content: 'Menu',
	});
	const contactTab = createElement('button', {
		className: 'btn',
		id: 'contact',
		content: 'Contact',
	});
	// append the tabs to nav
	tabs.appendChild(homeTab);
	tabs.appendChild(menuTab);
	tabs.appendChild(contactTab);
	nav.appendChild(heading);
	nav.appendChild(tabs);

	return nav;
}

export const handleTabClick = () => {
	Home();

	const tabs = document.querySelectorAll('.btn');
	tabs.forEach((tab) => {
		tab.addEventListener('click', changeTab);
	});

	function changeTab(e) {
		const targetTab = e.target;

		changeActiveTab(e);

		if (targetTab.id === 'home') {
			main.innerHTML = '';
			Home();
		} else if (targetTab.id === 'menu') {
			main.innerHTML = '';
			Menu();
		} else if (targetTab.id === 'contact') {
			main.innerHTML = '';
			Contact();
		}
	}

	function changeActiveTab(e) {
		tabs.forEach((tab) => tab.classList.remove('active'));
		e.target.classList.add('active');
	}
};
