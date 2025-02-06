import { SessionManager } from "./js/localstorageSession";

//demineur-game-settings-form

const settingsSetup = (main) => {
	const frame = main.querySelector('#demineur-game-settings-form');
	const inputs = [...frame.querySelectorAll('select')];
	const start = frame.querySelector('#start-game');
	
	start.onclick = (e) => {
		e.preventDefault();
		e.stopImmediatePropagation();
		e.stopPropagation();
		const settings = {}
		
		inputs.map(i => {
			const name = i.name
			settings[name] = i.value
		})
		
		const session = new SessionManager();
		session.setProperty('settings', JSON.stringify(settings));
	}
}

const initDemineurGame = async ($el) => {
	const container = document.querySelector($el);
	const req = new Request('/demineur');
	
	const getSettings = async () => {
		return fetch(req).then((response) => response.text())
		.then((data) =>
			`${data}`
		)
		.catch((error) => {
			console.log("Error: ", error)
			return "Une erreur est survenue."
		})
	}
	
	container.innerHTML = await getSettings();
	settingsSetup(container);
};
initDemineurGame('#demineur');