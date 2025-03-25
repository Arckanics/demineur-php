

export class DivConnector {
	
	#HTMLElement
	#props = {}
	constructor($el) {
		this.#HTMLElement = $el;
	}
	
	getElement() {
		return this.#HTMLElement;
	}
	
	// props
	getProps() {
		return { ... this.#props }
	}
	getProp(key) {
		this.#props[key] = this.#HTMLElement.getAttribute(key)
		return this.#HTMLElement.getAttribute(key);
	}
	
	setProp(key, value) {
		this.#props[key] = value;
		this.#HTMLElement.setAttribute(key, value);
	}
	
	// classes
	
	addClass(className) {
		this.#HTMLElement.classList.add(className);
	}
	
	delClass(className) {
		this.#HTMLElement.classList.remove(className);
	}
	
	replaceClass(oldClass, className) {
		this.#HTMLElement.classList.replace(oldClass, className);
	}
	
	// content
	text(txt) {
		this.#HTMLElement.innerText = txt
	}
	
}