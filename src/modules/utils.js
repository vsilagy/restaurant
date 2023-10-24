export function createElement(type, options = {}) {
	const { id, className, content, attributes, events } = options;
	const element = document.createElement(type);
	if (id) {
		element.id = id;
	}
	if (className) {
		element.classList.add(className);
	}
	if (content) {
		element.textContent = content;
	}
	if (attributes) {
		for (const [attrName, attrValue] of Object.entries(attributes)) {
			element.setAttribute(attrName, attrValue);
		}
	}
	if (events) {
		for (const [eventName, eventHandler] of Object.entries(events)) {
			element.addEventListener(eventName, eventHandler);
		}
	}

	return element;
}
