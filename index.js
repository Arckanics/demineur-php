import { settingsSetup } from "./js/settings";

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