import { settingsSetup } from "./js/settings";

const initDemineurGame = async ($name) => {
	const container = document.querySelector($name);
	
	
	
	
	settingsSetup(container);
};


initDemineurGame("#demineur");