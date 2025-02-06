import { v4 } from "uuid";

export class SessionManager  {
	#session
	propList = {}
	constructor() {
		// Génère une clé unique aléatoire
		if (localStorage.getItem('demineur-session-id')) {
			this.#session = this.getSession()
		} else {
			this.setSession()
		}
	}
	
	setSession() {
		this.#session = v4();
		localStorage.setItem('demineur-session-id', `${this.#session}`);
	}
	
	getSession() {
		return localStorage.getItem('demineur-session-id');
	}
	
	setProperty(key, value) {
		this.propList[key] = value;
		localStorage.setItem(`demineur-${key}`, `${value}`)
	}
	
	getProperty(key) {
		const store = localStorage.getItem(`demineur-${key}`)
		if (!store) {
			return null
		}
		return store
	}
	
	getProps() {
		const props = {}
		for (const key in this.propList) {
			props[key] = localStorage.getItem(`demineur-${key}`);
		}
		return props;
	}
}