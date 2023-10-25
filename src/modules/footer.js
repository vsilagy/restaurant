import { createElement } from './utils';
import githubImg from '../images/github.svg';

export default function footer() {
	const footer = createElement('footer', { className: 'footer' });
	const text = createElement('p', {
		content: '© 2023 Made by vsilagy',
	});
	const link = createElement('a', {
		attributes: {
			href: 'https://github.com/vsilagy/restaurant',
			target: '_blank',
		},
	});

	const image = createElement('img', {
		attributes: {
			src: githubImg,
			alt: 'github logo',
		},
	});

	footer.appendChild(text);
	link.appendChild(image);
	footer.appendChild(link);

	return footer;
}
