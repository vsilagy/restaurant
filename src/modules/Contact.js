import { createElement } from './utils';
import { main } from './page-load';
import mapImage from '../images/map.png';

export default function Contact() {
	const contact = createElement('div', { className: 'hero' });
	const heading = createElement('h2', { content: 'Our Address' });
	const text = createElement('p');
	text.innerHTML = `Adress: 740 Madison Ave, <br>
    New York, <br>
    NY 10065 <br>
    Phone: (212) 582-2000`;

	const map = new Image();
	map.classList.add('map');
	map.src = mapImage;

	contact.appendChild(heading);
	contact.appendChild(text);
	contact.appendChild(map);
	main.appendChild(contact);
}
